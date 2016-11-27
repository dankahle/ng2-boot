import { Ng2BootPage } from './app.po';

describe('ng2-boot App', function() {
  let page: Ng2BootPage;

  beforeEach(() => {
    page = new Ng2BootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
