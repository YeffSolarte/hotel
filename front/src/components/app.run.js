appRun.$inject = ['$rootScope', '$window', '$state', '$transitions'];

function appRun($rootScope, $window, $state, $transitions, $timeout){
  $rootScope.reloadProyect = false;
  $rootScope.reloadProyectState = '';
  $transitions.onSuccess({ to: 'home.**' }, function(trans1, trans) {
    // if (!auth.isAuthenticated()) {
    //   // User isn't authenticated. Redirect to a new Target State
    //   return trans.router.stateService.target('login');
    // }
    if($rootScope.reloadProyect){
      $rootScope.reloadProyect = false;
      $state.go($rootScope.reloadProyectState);
      // $timeout(() => {
      //   $state.reload();
      // }, 1000);
    }
  });
}

export default appRun;
