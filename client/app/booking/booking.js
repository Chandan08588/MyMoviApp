'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/booking', {
        template: '<booking></booking>'
      });
  });
