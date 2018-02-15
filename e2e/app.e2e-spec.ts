import { RedemployPage } from './app.po';

describe('redemploy App', function() {
  let page: RedemployPage;

  beforeEach(() => {
    page = new RedemployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
