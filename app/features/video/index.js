import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './video.routes';
import VideoListingController from './videoListing.controller';
import './videoListing.scss'
import VideoService from './video.service';

export default angular.module('app.video', [uirouter])
  .config(routing)
  .controller('VideoListingController', VideoListingController)
  .service('VideoService', VideoService)
  .name;