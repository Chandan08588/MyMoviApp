'use strict';

(function(){

class SeatComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myMoviAppApp')
  .component('seat', {
    templateUrl: 'app/seat/seat.html',
    controller: SeatComponent,
    controllerAs: 'seatCtrl'
  });

})();
