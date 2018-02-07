let inject = ['$http', 'ngAuthSettings', '$q', 'AuthTokenFactory', '$httpParamSerializerJQLike'];

class SharedService {
  constructor ($http, ngAuthSettings, $q, AuthTokenFactory, $httpParamSerializerJQLike){
    this.ngAuthSettings = ngAuthSettings;
    this.$q = $q;
    this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
    this.AuthTokenFactory = AuthTokenFactory;
    this.$http = $http;
  }

}

SharedService.$inject = inject;

export default SharedService;
