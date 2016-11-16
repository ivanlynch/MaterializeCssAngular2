import { MaterializetemplatePage } from './app.po';

describe('materializetemplate App', function() {
  let page: MaterializetemplatePage;

  beforeEach(() => {
    page = new MaterializetemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
