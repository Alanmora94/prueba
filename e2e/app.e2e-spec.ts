import { AlanPage } from './app.po';

describe('alan App', function() {
  let page: AlanPage;

  beforeEach(() => {
    page = new AlanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
