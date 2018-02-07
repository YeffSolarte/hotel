import angular from 'angular';
import simpleFilters from './filters.simple';

let filters = angular.module('shared.filters', [])
  .filter('capitalize', simpleFilters.capitalize)
  .filter('s4bCurrency', simpleFilters.s4bCurrency)
  .filter('fileSize', simpleFilters.fileSize)
  .filter('starsFilter', simpleFilters.starsFilter)
  .filter('ngEnter', simpleFilters.ngEnter);

export default filters;
