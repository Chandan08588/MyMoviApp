'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PaymentComponent = function () {
    function PaymentComponent($http) {
      _classCallCheck(this, PaymentComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.bookings = [];
    }

    _createClass(PaymentComponent, [{
      key: '$onInit',
      value: function $onInit() {

        this.movieName = sessionStorage.getItem('name');

        this.total = sessionStorage.getItem('totalAmount');
        this.ticket = sessionStorage.getItem('ticketNum');
        this.internetHandling = sessionStorage.getItem('internetCharges');
        this.subCharges = sessionStorage.getItem('subAmount');
        this.theater = sessionStorage.getItem('seletedTheater');
      }
    }, {
      key: 'payment',
      value: function payment() {
        this.$http.post('/api/bookedTicketss ', {
          Name: this.name,
          Contact: this.contact,
          Movie: sessionStorage.getItem('name'),
          Tickets: sessionStorage.getItem("ticketNum"),
          SeatNumber: sessionStorage.getItem("seat"),
          AmountPaid: sessionStorage.getItem("totalAmount")

        });
      }
    }]);

    return PaymentComponent;
  }();

  angular.module('myMoviAppApp').component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });
})();
//# sourceMappingURL=payment.controller.js.map
