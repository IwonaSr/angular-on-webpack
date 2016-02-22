export default class VideosListingController {
  constructor(VideoService) {
    this.videos = VideoService.getVideos();
  }
}