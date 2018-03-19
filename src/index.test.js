import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('this is first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('this is related to jsdom', () => {
  it('should test index.html file', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello World');
      done();
      window.close();
    })
  })
})