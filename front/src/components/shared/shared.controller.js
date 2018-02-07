import angular from 'angular';
import modalConfirmation from '../shared/components/modal-response/modal-response.view.html';
let inject = [
  '$scope',
  '$state',
  '$window',
  'SharedService',
  '$rootScope',
  'AuthTokenFactory',
  'ngAuthSettings',
  '$templateCache',
  '$location',
  '$timeout',
  '$uibModal',
  'data'
];

class SharedController {
  constructor($scope,
              $state,
              $window,
              SharedService,
              $rootScope,
              AuthTokenFactory,
              ngAuthSettings,
              $templateCache,
              $location,
              $timeout,
              $uibModal,
              data) {

    this.$state = $state;
    this.SharedService= SharedService;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$uibModal = $uibModal;
    this.$templateCache = $templateCache;
    this.$window = $window;
    this.$timeout = $timeout;
    this.$location = $location;
    this.ngAuthSettings = ngAuthSettings;
    this.AuthTokenFactory = AuthTokenFactory;
    this.data = data;
  }


  messageResponse (options, callAcept, callback, callCancel, callbackCancel) {
    let modalInstance = this.$uibModal.open({
      animation: true,
      template: modalConfirmation,
      controller : 'ModalResponseController',
      controllerAs : 'mdCtrl',
      size: options.size,
      resolve : {
        modalOptions : () => options
      }
    });
    modalInstance.result.then(() => {
      if(callAcept) {
        callback();
      }
    }).catch(reason => {
      if(callCancel) {
        callbackCancel();
      }
    });
  }

}

SharedController.$inject = inject;

export default SharedController;
