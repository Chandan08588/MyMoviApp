'use strict';

angular.module('myMoviAppApp', ['myMoviAppApp.auth', 'myMoviAppApp.admin', 'myMoviAppApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match']).config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
