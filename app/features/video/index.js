import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './video.routes';
import VideoListingController from './videoListing.controller';

export default angular.module('app.video', [uirouter])
  .config(routing)
  .controller('VideoListingController', VideoListingController)
  .name;