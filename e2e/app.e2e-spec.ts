import { Pr2Page } from './app.po';

describe('pr2 App', () => {
  let page: Pr2Page;

  beforeEach(() => {
    page = new Pr2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
