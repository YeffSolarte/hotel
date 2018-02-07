routesConfig.$inject = ['$stateProvider'];

function routesConfig($stateProvider){
  $stateProvider
    .state('home.home', {
      url: "/home",
      template: `<home sh-ctrl="shCtrl"></home>`
    });
}

export default routesConfig;
