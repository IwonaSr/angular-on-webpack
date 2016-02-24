export default class Homepage {

	headline() {
		return element(by.css('h1'));
	}

	button() {
		return element(by.css('button'));
	}
	
	get() {
		browser.get('/');
	}

	clickButton(){
		this.button().click();
	}
}