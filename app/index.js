import angular from  'angular';
import uirouter from 'angular-ui-router';
import 'angular-utils-pagination/dirPagination';
import { routing } from './config';

import './common/stylesheets/index.scss'

import home from './features/home'
import video from './features/video'

const ngModule = angular.module('app', [
  uirouter,
  home,
  video,
  'angularUtils.directives.dirPagination'
]);

ngModule
  .config(routing);