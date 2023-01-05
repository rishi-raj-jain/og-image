const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')

const { generatePage } = require('@/lib/page')

export default async function handler(req, res) {
  const { title, width = 1920, height = 1080 } = req.query
  const dom = generatePage(title)
  const browser = await puppeteer.launch({
    args: chrome.args,
    ignoreHTTPSErrors: true,
    headless: chrome.headless,
    executablePath: await chrome.executablePath,
  })
  const page = await browser.newPage()
  await page.setContent(dom)
  await page.setViewport({ width: parseInt(width), height: parseInt(height) })
  const content = await page.$('body')
  const imageBuffer = await content.screenshot({ omitBackground: true })
  await page.close()
  await browser.close()
  res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
  res.setHeader('Content-Type', 'image/png')
  res.send(imageBuffer)
  res.status(200)
}
