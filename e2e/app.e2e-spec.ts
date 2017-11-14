import { DetelPage } from './app.po';

describe('detel App', () => {
  let page: DetelPage;

  beforeEach(() => {
    page = new DetelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
