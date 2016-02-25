export default class VideosListingController {
  constructor(VideoService) {
    this.videoService = VideoService;
    this.videos = this.videoService.getVideos();
    this.showingSnap = null;
  }

  deleteVideo(video){
    this.videoService.deleteVideo(video);
  }

  showSnap(url){
    this.showingSnap = url;
  }
}