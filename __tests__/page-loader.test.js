const pageLoader = require('../src/bin/page-loader');

describe('Page loader', () => {
  it('simple test', () => {
    expect(pageLoader()).toBe(2);
  });
});
