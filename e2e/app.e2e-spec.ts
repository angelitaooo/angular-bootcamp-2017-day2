import { Day2Page } from './app.po';

describe('day2 App', () => {
  let page: Day2Page;

  beforeEach(() => {
    page = new Day2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
