export default class VideoEditController {
  constructor(VideoService, $state, $stateParams) {
    this.videoService = VideoService;
    this.selectedVideo = this.videoService.getCopyOfVideo($stateParams.id);
    this.state = $state;
  }

  updateVideo(selectedVideo) {
    this.videoService.updateVideo(selectedVideo);
    this.state.go('videoListing');
  }
}