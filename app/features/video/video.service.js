export default class VideoService {
  constructor() {
  }

  getVideos() {
    let videos = [
      {title: 'Terminator 3', thumbUrl: 'http://lorempixel.com/150/100/', snapUrl: 'http://lorempixel.com/500/300/', description: 'lorem padolem Olem'},
      {title: 'Terminator 2', thumbUrl: 'http://lorempixel.com/150/100/', snapUrl: 'http://lorempixel.com/500/300/', description: 'lorem padolem Olem'},
      {title: 'Terminator 1', thumbUrl: 'http://lorempixel.com/150/100/', snapUrl: 'http://lorempixel.com/500/300/', description: 'lorem padolem Olem'}
    ]
    return videos;
  }
}
