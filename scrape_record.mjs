import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false,  // Need non-headless for canvas recording
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://nalaprasad.com/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  
  // Use browser's MediaRecorder to capture canvas
  const result = await page.evaluate(async () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return { error: 'no canvas' };
    
    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
    const chunks = [];
    
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.start();
    
    // Record for 5 seconds
    await new Promise(r => setTimeout(r, 5000));
    
    recorder.stop();
    await new Promise(r => recorder.onstop = r);
    
    // Convert to base64
    const blob = new Blob(chunks, { type: 'video/webm' });
    const buffer = await blob.arrayBuffer();
    const uint8 = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < uint8.length; i++) binary += String.fromCharCode(uint8[i]);
    return { data: btoa(binary), size: uint8.length };
  });
  
  if (result.data) {
    const buffer = Buffer.from(result.data, 'base64');
    fs.writeFileSync('public/hero-background.webm', buffer);
    console.log('Saved hero-background.webm, size:', buffer.length, 'bytes');
  } else {
    console.log('Error:', result);
  }
  
  await browser.close();
})();
