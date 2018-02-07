import angular from 'angular';
import providersModule from './providers/shared-providers';
import componentsModule from './components/shared-components';
import SharedService from './shared.service';
import FiltersModule from './filters/filters';
import SharedController from './shared.controller';

let sharedModule = angular.module('shared', [
  providersModule.name,
  FiltersModule.name,
  componentsModule.name
])
  .controller('SharedController', SharedController)
  .service('SharedService', SharedService);

export default sharedModule;
