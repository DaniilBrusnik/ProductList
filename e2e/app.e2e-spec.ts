import { DaniilBrusnikPage } from './app.po';

describe('daniil-brusnik App', () => {
  let page: DaniilBrusnikPage;

  beforeEach(() => {
    page = new DaniilBrusnikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
