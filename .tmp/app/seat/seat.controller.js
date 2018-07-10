'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var SeatComponent = function SeatComponent() {
    _classCallCheck(this, SeatComponent);

    this.message = 'Hello';
  };

  angular.module('myMoviAppApp').component('seat', {
    templateUrl: 'app/seat/seat.html',
    controller: SeatComponent,
    controllerAs: 'seatCtrl'
  });
})();
//# sourceMappingURL=seat.controller.js.map
