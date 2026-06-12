import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0' });
    
    const videos = await page.$$eval('video', els => els.map(el => {
      let src = el.src;
      if (!src) {
        const source = el.querySelector('source');
        if (source) src = source.src;
      }
      return src;
    }));
    console.log('Videos:', videos);
    
    const iframes = await page.$$eval('iframe', els => els.map(el => el.src));
    console.log('Iframes:', iframes);
    
    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
