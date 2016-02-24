import Homepage from './home.page';

describe('Feature Home', () => {
	let homePage = new Homepage();

	it('should have H1 with text: Beautiful World', () => {
		homePage.get();
		expect(homePage.headline().getText()).toEqual('Beautiful World');
	});

	it('after click button should have H1 with text: Beautiful World is end', () => {
		homePage.clickButton();
		expect(homePage.headline().getText()).toEqual('Beautiful World is end');
	});
})
