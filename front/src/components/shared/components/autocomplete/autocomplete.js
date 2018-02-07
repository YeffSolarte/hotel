import angular from 'angular';
import autoCompleteComponent from './autocomplete.directive';
import AutoCompleteService from './autocomplete.service';


let autoCompleteModule = angular.module('shared.components.autoComplete',[])
  .service('AutoCompleteService', AutoCompleteService)
  .directive('autoComplete', autoCompleteComponent);
export default autoCompleteModule;
