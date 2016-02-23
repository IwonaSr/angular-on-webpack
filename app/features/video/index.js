import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './video.routes';
import VideoService from './video.service';

import VideoListingController from './videoListing/videoListing.controller';
import './videoListing/videoListing.scss'

export default angular.module('app.video', [uirouter])
  .config(routing)
  .controller('VideoListingController', VideoListingController)
  .service('VideoService', VideoService)
  .name;