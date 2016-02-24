import VideoListingPage from './videoListing.page';
import VideoNewPage from './videoNew.page';

describe('Feature Home', () => {
  let videoListingPage = new VideoListingPage();
  let videoNewPage = new VideoNewPage();

  it('visit video listing page first time', () => {
    videoListingPage.get();
    expect(videoListingPage.headline().getText()).toEqual('Video Records Information');
    expect(videoListingPage.videoListing().count()).toBe(0);
  });

  it('add new video, then visit video listing again, look for added video', () => {
    videoNewPage.get();
    videoNewPage.fillForm('New title');
    videoNewPage.submitForm();
    videoListingPage.get();

    expect(videoListingPage.videoListing().count()).toBe(1);
    expect(videoListingPage.mediaHeading().getText()).toEqual('1. New title');
  });
})
