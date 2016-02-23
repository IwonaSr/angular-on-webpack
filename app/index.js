import angular from  'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

import home from './features/home'
import video from './features/video'

const ngModule = angular.module('app', [
  uirouter,
  home,
  video
]);

ngModule.config(routing);