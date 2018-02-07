import angular from 'angular';
import autoCompleteModule from './autocomplete/autocomplete';
import whenScrolledModule from './when-scrolled/when-scrolled';
import ModalResponseController from './modal-response/modal-response.controller';

let sharedComponentsModule = angular.module('shared.components', [
  autoCompleteModule.name,
  whenScrolledModule.name
])
  .controller('ModalResponseController', ModalResponseController)
  .filter('toTrusted', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);


export default sharedComponentsModule;
