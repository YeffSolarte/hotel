let inject = ['$scope', '$uibModalInstance','modalOptions'];

class ModalResponseController {
  constructor ($scope,$uibModalInstance,modalOptions) {
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.modalOptions = Object.assign({}, modalOptions);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  ok() {
    this.$uibModalInstance.close();
  }
}

ModalResponseController.$inject = inject;

export default ModalResponseController;
