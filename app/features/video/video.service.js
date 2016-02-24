export default class VideoService {
  constructor($localStorage, $filter) {
    $localStorage.videos = $localStorage.videos || [];
    this.videos = $localStorage.videos;
    this.filter = $filter;
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
  }

  deleteVideo(video) {
    let index = this.videos.indexOf(video);
    if(index !== -1)
      this.videos.splice(index, 1); 
  }

  findVideoById(id, videos) {
    return this.filter('filter')(videos, {id: id})[0];
  }

  getCopyOfVideo(id) {
    let videos = angular.copy(this.videos);
    return this.findVideoById(id, videos);
  }

  updateVideo(updatedVideo) {
    let oldVideo = this.findVideoById(updatedVideo.id, this.videos);
    let index = this.videos.indexOf(oldVideo);
    this.videos[index] = updatedVideo;
  }
}
