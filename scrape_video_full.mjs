import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  const assets = [];
  page.on('response', response => {
    const url = response.url();
    const ct = response.headers()['content-type'] || '';
    if (ct.includes('video') || ct.includes('mp4') || url.match(/\.(mp4|webm|mov|m3u8)/i)) {
      console.log('VIDEO:', url, '|', ct);
    }
    if (url.includes('framerusercontent') && !url.match(/\.(mjs|css|woff|json|png|jpg|svg|gif|webp)/i)) {
      assets.push({ url, ct });
    }
  });

  await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 5000));
  
  const result = await page.evaluate(() => {
    const vids = Array.from(document.querySelectorAll('video')).map(v => ({
      src: v.src,
      currentSrc: v.currentSrc,
      html: v.outerHTML.substring(0, 600)
    }));
    return { vids };
  });
  
  console.log('Video elements:', JSON.stringify(result, null, 2));
  console.log('\nUnknown framer assets:');
  assets.forEach(a => console.log(a.url, '|', a.ct));

  await browser.close();
})();
