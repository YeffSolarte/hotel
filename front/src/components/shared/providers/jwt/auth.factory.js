AuthInterceptor.$inject = ['AuthTokenFactory', '$q', '$injector'];
AuthTokenFactory.$inject = ['$window'];

function AuthTokenFactory ($window){
  let store = $window.localStorage;
  return {
    getToken: getToken,
    setToken: setToken
  };

  function getToken (key) {
    return store.getItem(key);
  }

  function setToken (key, token) {
    if (token){
      store.setItem(key, token);
    } else {
      store.removeItem(key);
    }
  }
}

function AuthInterceptor (AuthTokenFactory, $q, $injector){
  let vm = this;

  vm.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  return {
    request: addToken,
    requestError : requestError,
    response: response,
    responseError: _responseError
  };

  function addToken(config) {
    let token = AuthTokenFactory.getToken();
    if (token) {
      config.headers = config.headers || {};
      // config.headers.Authorization = 'Bearer ';
    }
    return config;
  }

  function requestError (rejection) {
    return $q.reject(rejection);
  }

  function response (res) {
    //return null; // <-- this is not returning the config object
    //return response || $q.when(response);
    //console.log(res);
    return res;
  }

  function _responseError (rejection) {
    // if (status === 0 || status === -1 || status === 503) {
    //   MainService.checked = false;
    //   // showActionToast(rejection,'Perdiste la conexión con el servidor.');
    //   console.log('SIN CONEXION -- net::ERR_INTERNET_DISCONNECTED');
    // }
    // else if (status === 401) {
    //   // TODO: Descomentariar el redireccionamiento cuando se vuelva a habilitar la seguridad
    //   // $state.go('login');
    //   MainService.showMessageResultError('No estás autorizado.');
    // }
    // else if(status === 400) console.log('Bad Request');
    // else if(status === 404) console.log('Not Found');
    // //else if (status === 331) console.log('RED SUSPENDIDA -- net::ERR_NETWORK_IO_SUSPENDED');
    // else if (status >= 500 && status !== 504 && status !== 503) {
    //   if(status === 500 && rejection.data.message === "No se puede eliminar el registro.") MainService.showMessageResultErrorToDelete();
    //   else MainService.showMessageResultError('Error interno del servidor.');
    // }
    // else if (status === 403) {
      // var nameState = $state.current.name;
      // WindowViewService.changeRestart(true);
      // MainService.showMessageResultError('No tienes permisos.');
      // $state.go('home');
      // WindowViewService.deleteWindowObject(nameState, true);
      // WindowViewService.changeRestart(false);
    // }
    // else if (status === 504) showActionToast(rejection,'Tiempo de espera agotado.');
    // else MainService.showMessageResultError('Error inesperado.');

    return $q.reject(rejection);
  }
}

let authObject = {
  AuthTokenFactory: AuthTokenFactory,
  AuthInterceptor: AuthInterceptor
};

export default authObject;
