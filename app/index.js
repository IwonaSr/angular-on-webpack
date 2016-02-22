import angular from  'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

import home from './features/home'
import video from './features/video'

import './test.scss';

const ngModule = angular.module('app', [
  uirouter,
  home,
  video
]);

ngModule.config(routing);