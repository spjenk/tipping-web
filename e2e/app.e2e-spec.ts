import { TippingWebPage } from './app.po';

describe('tipping-web App', function() {
  let page: TippingWebPage;

  beforeEach(() => {
    page = new TippingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
