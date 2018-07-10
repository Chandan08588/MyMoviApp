'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/selectTheater', {
        template: '<select-theater></select-theater>'
      });
  });
