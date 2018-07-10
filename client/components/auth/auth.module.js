'use strict';

angular.module('myMoviAppApp.auth', ['myMoviAppApp.constants', 'myMoviAppApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
