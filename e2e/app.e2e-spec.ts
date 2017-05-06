import { ShoppingListDemoPage } from './app.po';

describe('shopping-list-demo App', () => {
  let page: ShoppingListDemoPage;

  beforeEach(() => {
    page = new ShoppingListDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
