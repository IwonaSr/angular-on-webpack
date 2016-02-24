export default class VideosListingController {
  constructor(VideoService) {
    this.videoService = VideoService;
    this.videos = this.videoService.getVideos();
  }

  deleteVideo(video){
    this.videoService.deleteVideo(video);
  }
}