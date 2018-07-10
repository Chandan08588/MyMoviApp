'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seat', {
        template: '<seat></seat>'
      });
  });
