const https = require('https');

https.get('https://www.maitsys.com/products/firefighter', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // Look for feature-specific sections - search for common firefighter feature keywords
        const keywords = [
            'Emergency Access', 'One-Click', 'Request Tracking', 'Audit Trail',
            'AI Audit', 'Session Monitor', 'Live Session', 'Approval Workflow',
            'Escalation', 'SOX', 'Bulk Audit', 'Safeguard', 'Tamper',
            'Configurable Report', 'Access Tracking', 'Workspace', 'Routing',
            'Firefighter', 'firefighter', 'EAM', 'elevated access'
        ];
        
        // Extract the text content of the page
        const textContent = data.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                                .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                                .replace(/<[^>]*>/g, '|')
                                .replace(/\|+/g, '|')
                                .replace(/\s+/g, ' ');
        
        // Search around each keyword for meaningful context
        keywords.forEach(kw => {
            const idx = textContent.indexOf(kw);
            if (idx > -1) {
                const start = Math.max(0, idx - 100);
                const end = Math.min(textContent.length, idx + 200);
                const snippet = textContent.substring(start, end).replace(/\|/g, ' ').replace(/\s+/g, ' ').trim();
                console.log(`\n[${kw}]:`);
                console.log(`  ${snippet}`);
            }
        });
        
        // Also look for the specific feature section structure
        // The Maitsys site likely uses a React SPA - look for data embedded in the JS bundle
        const featureDataMatch = data.match(/feature[s]?\s*[:=]\s*\[[\s\S]*?\]/i);
        if (featureDataMatch) {
            console.log("\n=== FEATURE DATA ===");
            console.log(featureDataMatch[0].substring(0, 500));
        }
        
        // Find the main content area around image13
        const img13Idx = data.indexOf('image13');
        if (img13Idx > -1) {
            // Search before image13 for the nearest feature content
            const before = data.substring(Math.max(0, img13Idx - 2000), img13Idx);
            const cleanBefore = before.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            console.log("\n=== TEXT BEFORE image13 (last 500 chars) ===");
            console.log(cleanBefore.substring(cleanBefore.length - 500));
        }
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});
