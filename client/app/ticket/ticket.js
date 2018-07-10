'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ticket', {
        template: '<ticket></ticket>'
      });
  });
