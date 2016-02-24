import VideoService from './video.service';

describe('Service: VideoService', () => {
  let videoService;

  beforeEach( () => {
    videoService = new VideoService({}); 
  })

  it('initial video to empty array', () => {
    expect(videoService.videos.length).toBe(0);
  });

  it('set first id to 1', () => {
    expect(videoService.getNewId()).toBe(1);
  });

   it('set second id to 2', () => {
    videoService.videos.push({id:1})
    expect(videoService.getNewId()).toBe(2);
  });

});