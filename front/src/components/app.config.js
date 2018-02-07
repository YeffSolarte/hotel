import core from './core.html';

appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'ngAuthSettings', '$ocLazyLoadProvider'];

function appConfig($stateProvider, $urlRouterProvider,$httpProvider, ngAuthSettings, $ocLazyLoadProvider){


  $httpProvider.interceptors.push('AuthInterceptor');
  $urlRouterProvider.otherwise('/app/home');
  
  $stateProvider
    .state('home', {
      url: "/app",
      // abstract: true,
      template: core,
      controller : 'SharedController',
      controllerAs : 'shCtrl',
      resolve:{
        data
      }
    });

  data.$inject = ['$state', 'SharedService'];
  function data($state, SharedService){
    return {};
  }
  
  
}

export default appConfig;
