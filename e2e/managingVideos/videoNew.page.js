export default class VideoNewPage {
  
  headline() {
    return element(by.css('h1'));
  }

  title(){
    return element(by.id('title'));
  }

  thumbUrl(){
    return element(by.id('thumbUrl'));
  }

  snapUrl(){
    return element(by.id('snapUrl'));
  }

  description(){
    return element(by.id('description'));
  }

  submitButton(){
    return element(by.css('button[type=submit]'))
  }

  fillForm(title='Test title', thumbUrl='http://thumb.jpg', snapUrl='http://snap.jpg', description='Test description') {
    this.title().sendKeys(title);
    this.thumbUrl().sendKeys(thumbUrl);
    this.snapUrl().sendKeys(snapUrl);
    this.description().sendKeys(description);
  }

  submitForm(){
    this.submitButton().click();
  }

  get() {
    browser.get('/#/videos/new');
  }

}