import { Ng4egPage } from './app.po';

describe('ng4eg App', () => {
  let page: Ng4egPage;

  beforeEach(() => {
    page = new Ng4egPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
