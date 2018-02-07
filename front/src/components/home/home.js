import angular from 'angular';
import homeComponent from './home.component';
import HomeService from './home.service';
import homeConfig from './home.config';

let homeModule = angular.module('home',[])
  .component('home', homeComponent)
  .service('HomeService', HomeService)
  .config(homeConfig);

export default homeModule;
