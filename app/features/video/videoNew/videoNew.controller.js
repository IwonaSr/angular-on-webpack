export default class VideoNewController {
  constructor(VideoService, $state) {
    this.videoService = VideoService;
    this.newVideo = {};
    this.state = $state;
  }

  addVideo(newVideo) {
    this.videoService.addVideo(newVideo);
    this.state.go('videoListing');
  }
}