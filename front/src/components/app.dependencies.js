import angular from 'angular';

let dependenciesModule = angular.module('app.dependencies',[
  'ui.router',
  'angular-jwt',
  'ui.bootstrap',
  'ngAria',
  'ngMessages',
  'ngAnimate',
  'naif.base64',
  'oc.lazyLoad']);

export default dependenciesModule;
