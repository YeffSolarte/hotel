class HomeService {
  constructor ($q, $http, ngAuthSettings) {
    this.ngAuthSettings = ngAuthSettings;
    this.$q = $q;
    this.$http = $http;
  }
}

HomeService.$inject = ['$q','$http', 'ngAuthSettings'];

export default HomeService;
