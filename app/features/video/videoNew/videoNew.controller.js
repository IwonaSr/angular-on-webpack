export default class VideoNewController {
  constructor(VideoService) {
    this.videoService = VideoService;
    this.newVideo = {};
    this.name = 'New Video Record Information';
  }

  addVideo(newVideo) {
    this.videoService.addVideo(newVideo);
  }
}