import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0' });
    
    // capture screenshot
    await page.screenshot({ path: '/Users/pranavnair/.gemini/antigravity-ide/brain/6a79c7d6-1c98-4371-9e26-4c04c29520a3/screenshot.png' });
    
    // Find canvas elements
    const canvases = await page.$$eval('canvas', els => els.length);
    console.log('Canvases:', canvases);
    
    // Find all image URLs that end in .gif
    const gifs = await page.$$eval('img', els => els.map(el => el.src).filter(src => src.includes('.gif')));
    console.log('GIFs:', gifs);
    
    // Find all elements with a CSS background-image
    const bgImages = await page.evaluate(() => {
        const els = [...document.querySelectorAll('*')];
        const bgs = els.map(el => window.getComputedStyle(el).backgroundImage)
                       .filter(bg => bg !== 'none' && bg !== 'initial');
        return [...new Set(bgs)];
    });
    console.log('Background Images:', bgImages);

    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
