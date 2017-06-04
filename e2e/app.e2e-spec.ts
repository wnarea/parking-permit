import { CmbPage } from './app.po';

describe('cmb App', function() {
  let page: CmbPage;

  beforeEach(() => {
    page = new CmbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
