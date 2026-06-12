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

    await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Check for any iframe sources just in case
    const iframes = await page.$$eval('iframe', els => els.map(el => el.src));
    console.log('Iframes:', iframes);
    
    // Output html to check for framer motion components that use videos
    const html = await page.content();
    const mp4Match = html.match(/https?:\/\/[^\s"'<>]+\.mp4/gi);
    if (mp4Match) console.log('MP4 in fully rendered HTML:', mp4Match);

    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
