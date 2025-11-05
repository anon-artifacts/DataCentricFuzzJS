const launchCommand = './chrome';

(async () => {
    const puppeteer = require('puppeteer')
    console.log("xx");
    const executablePath = launchCommand
    const launchOptions = {
      headless: false,
      // slowMo: 250
      executablePath,
      timeout: 10000,
       dumpio:true, // output asan log
      args: ['--no-sandbox','--disable-gpu']
    }
    let browser = await puppeteer.launch(launchOptions)
    var [page] = await browser.pages();
    const url = `http://localhost:8000/crash.html`
    console.log(url);
    await page.goto(url);
    let tmp;
    Promise.all([page.$eval('empty_selector', (arg1, arg2) => emptyhandle, tmp),
    page.reload({ waitUntil: ['domcontentloaded'], timeout: 5000 })]) 

  })();
