/* global describe, it, browser */

const _      = require('lodash');

describe('webdriverio-sync-slow-example-slow', () => {
  it('slow', () => {
    browser.url('http://localhost:9999/');
    let labels = browser.$$('ul li');
    for (let l of _.reverse(labels)) {
      console.time('query');
      l.$('span');
      console.timeEnd('query');

      console.log();
    }
  });
});