import angular from 'angular';
import appConfig from './app.config';
import appRun from './app.run';
import homeModule from './home/home';
import constants from './app.constants';
import dependenciesModule from "./app.dependencies";
import sharedModule from "./shared/shared";

let hotelAppModule = angular.module('hotel', [dependenciesModule.name, sharedModule.name, homeModule.name])
  .constant('ngAuthSettings',constants)
  .config(appConfig)
  .run(appRun);

export default hotelAppModule;


