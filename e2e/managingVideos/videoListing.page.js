export default class VideoListingPage {
  
  headline() {
    return element(by.css('h1'));
  }

  videoListing() {
    return element.all(by.css('.media'));
  }

  mediaObject(){
    return element(by.css('.media-object'));
  }

  mediaHeading(){
    return element(by.css('.media-heading'));
  }

  mediaParagraph() {
    return element(by.css('.media-body p'));
  }

  get() {
    browser.get('/#/videos');
  }

}