'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var AdministratorComponent = function AdministratorComponent() {
    _classCallCheck(this, AdministratorComponent);

    this.message = 'Hello';
  };

  angular.module('myMoviAppApp').component('administrator', {
    templateUrl: 'app/administrator/administrator.html',
    controller: AdministratorComponent,
    controllerAs: 'administratorCtrl'
  });
})();
//# sourceMappingURL=administrator.controller.js.map
