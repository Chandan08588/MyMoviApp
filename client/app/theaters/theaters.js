'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theaters', {
        template: '<theaters></theaters>'
      });
  });
