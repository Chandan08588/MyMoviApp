'use strict';

(function(){

class AdministratorComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myMoviAppApp')
  .component('administrator', {
    templateUrl: 'app/administrator/administrator.html',
    controller: AdministratorComponent,
    controllerAs: 'administratorCtrl'
  });

})();
