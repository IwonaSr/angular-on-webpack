import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'ngstorage'

import routing from './video.routes';
import VideoService from './video.service';
import videoForm from './directives/videoForm/videoForm.directive'

import VideoListingController from './videoListing/videoListing.controller';
import './videoListing/videoListing.scss'

import VideoNewController from './videoNew/videoNew.controller';

export default angular.module('app.video', [uirouter, 'ngStorage'])
  .config(routing)
  .directive('videoForm', videoForm)
  .controller('VideoListingController', VideoListingController)
  .controller('VideoNewController', VideoNewController)
  .service('VideoService', VideoService)
  .name;