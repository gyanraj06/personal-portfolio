import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    page.on('response', response => {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('video') || contentType.includes('mp4')) {
        console.log('Video found via Network:', response.url());
      }
    });

    await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle2' });
    
    // scroll down the page to trigger lazy loading
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            let distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
    
    // wait a bit for any network requests
    await new Promise(r => setTimeout(r, 2000));
    
    // dump all src of videos again
    const videos = await page.$$eval('video', els => els.map(el => {
      let src = el.src;
      if (!src) {
        const source = el.querySelector('source');
        if (source) src = source.src;
      }
      return src;
    }));
    console.log('Videos after scroll:', videos);

    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
