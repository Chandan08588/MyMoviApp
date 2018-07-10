'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var TicketComponent = function () {
    function TicketComponent($http, socket) {
      _classCallCheck(this, TicketComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;
      this.mymovies = [];
    }

    _createClass(TicketComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/mymoviess').then(function (response) {
          _this.mymovies = response.data;
          _this.socket.syncUpdates('mymovies', _this.mymovies);
        });

        this.movieName = sessionStorage.getItem('name');
        this.poster = sessionStorage.getItem('mPoster');
        this.total = sessionStorage.getItem('totalAmount');
        this.ticket = sessionStorage.getItem('ticketNum');
        this.internetHandling = sessionStorage.getItem('internetCharges');
        this.subCharges = sessionStorage.getItem('subAmount');

        this.SeatNumbers = sessionStorage.getItem('seat');
        this.theater = sessionStorage.getItem('seletedTheater');
        this.class = sessionStorage.getItem('myClass');
        this.date = sessionStorage.getItem('selectedDate');
        this.time = sessionStorage.getItem('selectedTime');
      }
    }]);

    return TicketComponent;
  }();

  angular.module('myMoviAppApp').component('ticket', {
    templateUrl: 'app/ticket/ticket.html',
    controller: TicketComponent,
    controllerAs: 'ticketCtrl'
  });
})();
//# sourceMappingURL=ticket.controller.js.map
