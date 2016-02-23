export default class VideoService {
  constructor($localStorage) {
    this.storage = $localStorage;
    this.videos = this.storage.videos || [];
  }

  getNewId() {
    let id = 1;
    if (this.videos.length > 0)
      id = this.videos[this.videos.length - 1].id + 1;
    return  id;
  }

  getVideos() {
    return this.videos;
  }

  addVideo(newVideo) {
    newVideo.id = this.getNewId();
    this.videos.push(newVideo);
    this.storage.videos = this.videos;
  }
}
