/* global describe, it, browser */

const _      = require('lodash');

describe('webdriverio-sync-slow-example-normal', () => {
  it('normal', async () => {
    browser.url('http://localhost:9999/');
    let labels = await browser.$$('ul li');
    for (let l of _.reverse(labels)) {
      console.time('query');
      await l.$('span');
      console.timeEnd('query');

      console.log();
    }
  });
});