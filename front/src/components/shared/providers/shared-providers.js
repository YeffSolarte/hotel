import angular from 'angular';
import authFactory from './jwt/auth.factory'

let sharedProvidersModule = angular.module('shared.providers', [])
    .factory('AuthInterceptor', authFactory.AuthInterceptor)
    .factory('AuthTokenFactory', authFactory.AuthTokenFactory);

export default sharedProvidersModule;
