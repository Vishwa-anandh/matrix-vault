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

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory not found. Please build the project first.');
    process.exit(1);
  }

  // 1. Start a local server for the dist folder
  const app = express();
  app.use(express.static(DIST_DIR));
  
  // Fallback to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
  });

  const server = app.listen(PORT, async () => {
    console.log(`Local server started on http://localhost:${PORT}`);
    
    try {
      // 2. Launch Puppeteer
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      
      // 3. Navigate and wait for React to mount
      console.log('Navigating to local site...');
      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
      
      // Give React an extra second to finish any animations/effects
      await new Promise(r => setTimeout(r, 1000));
      
      // 4. Extract the full HTML
      console.log('Extracting fully rendered HTML...');
      const html = await page.content();
      
      // 5. Overwrite the index.html file
      fs.writeFileSync(HTML_FILE, html, 'utf-8');
      console.log('Successfully wrote prerendered HTML to dist/index.html!');
      
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
