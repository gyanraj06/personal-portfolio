import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 5000));
  
  // Take a screenshot
  await page.screenshot({ path: '/tmp/nalaprasad.png', fullPage: false });
  
  const result = await page.evaluate(() => {
    const canvases = Array.from(document.querySelectorAll('canvas')).map(c => ({
      width: c.width,
      height: c.height,
      id: c.id,
      class: c.className,
      style: c.getAttribute('style')
    }));
    
    // Check for any element with background video or unusual bg
    const heroEl = document.querySelector('[class*="hero"], [class*="Hero"], section, .hero');
    
    return { canvases, heroOuterHTML: heroEl ? heroEl.outerHTML.substring(0, 500) : 'none' };
  });
  
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
