import faker from 'faker';
import puppeteer from 'puppeteer';

const client = 'localhost:3000';

let app;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${1920}, ${1080}`]
  });

  app = await browser.newPage();
  await app.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Main', () => {
  test('access page', async () => {
    await app.goto(client);
  });
});
