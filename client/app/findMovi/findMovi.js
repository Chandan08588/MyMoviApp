'use strict';

angular.module('myMoviAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/findMovi', {
        template: '<find-movi></find-movi>'
      });
  });
