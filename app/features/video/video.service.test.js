import video from './index';

describe('Service: VideoService: ', () => {
  let videoService;

  beforeEach(window.module(video));

  beforeEach( ()=>{
    window.module(function ($provide) {
        $provide.value('$localStorage', {});
    });
  });

  beforeEach(window.inject((_VideoService_) => {
    videoService = _VideoService_;
  }));

  it('constructor()', () => {
    expect(videoService.videos.length).toBe(0);
  });

  it('getNewId()', () => {
    expect(videoService.getNewId()).toBe(1);
    videoService.videos.push({id:1})

    expect(videoService.getNewId()).toBe(2);
  });

  it('deleteVideo()', () => {
    videoService.addVideo({title: 'first'});
    videoService.addVideo({title: 'second'});
    let videoToDelete = videoService.videos[0];
    videoService.deleteVideo(videoToDelete);

    expect(videoService.videos).not.toContain(videoToDelete);
    expect(videoService.videos.length).toBe(1);
  });

  it('findVideoById()', () => {
    let videos = [{id:1, title: 'first'}, {id:2, title: 'second'}];
    let firstVideo = videoService.findVideoById(2, videos);
    expect(firstVideo.title).toEqual('second');
  });

  it('updateVideo()', () => {
    let video = {id: 1, title: 'initial'};
    videoService.videos = [video, {id:2, title: 'NuNU'}]
    video.title='Upated';
    videoService.updateVideo(video);
    
    expect(videoService.videos).toContain(video);
    expect(videoService.videos).toContain({id:2, title: 'NuNU'});
  });
});
