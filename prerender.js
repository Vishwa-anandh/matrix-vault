import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const DIST_DIR = path.resolve(__dirname, 'dist');
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');

// Every client-side route that should get its own prerendered HTML file.
const ROUTES = ['/', '/platform', '/how-it-works', '/faq', '/contact'];

// Maps a route to its output file inside dist/.
function outputPathFor(route) {
  if (route === '/') {
    return HTML_FILE;
  }
  const routeDir = path.join(DIST_DIR, route.replace(/^\//, ''));
  return path.join(routeDir, 'index.html');
}

async function prerender() {
  console.log('Starting pre-rendering process...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory not found. Please build the project first.');
    process.exit(1);
  }

  // Snapshot the pristine build output BEFORE any route gets prerendered.
  // (Routes are prerendered one at a time below, and the very first one
  // overwrites dist/index.html — if the SPA fallback below re-read that file
  // from disk, every route after the first would boot from an
  // already-prerendered page instead of the original template, baking in
  // duplicate <title>/<link rel="canonical"> tags.)
  const originalHtml = fs.readFileSync(HTML_FILE, 'utf-8');

  // 1. Start a local server for the dist folder
  const app = express();
  app.use(express.static(DIST_DIR));

  // Fallback to the pristine template for SPA routing
  app.get('*', (req, res) => {
    res.send(originalHtml);
  });

  const server = app.listen(PORT, async () => {
    console.log(`Local server started on http://localhost:${PORT}`);

    try {
      // 2. Launch Puppeteer
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();

      for (const route of ROUTES) {
        // 3. Navigate and wait for React to mount
        console.log(`Navigating to ${route}...`);
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });

        // Give React an extra second to finish any animations/effects
        await new Promise(r => setTimeout(r, 1000));

        // 4. Extract the full HTML
        const html = await page.content();

        // 5. Write to the route's output file
        const outFile = outputPathFor(route);
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, html, 'utf-8');
        console.log(`Successfully wrote prerendered HTML to ${path.relative(__dirname, outFile)}!`);
      }

      await browser.close();
    } catch (error) {
      console.error('Error during prerendering:', error);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

prerender();
