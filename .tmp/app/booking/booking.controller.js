'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var BookingComponent = function () {
    function BookingComponent($http, $scope) {
      _classCallCheck(this, BookingComponent);

      this.message = 'Hello';
      var seats = [];
      this.$http = $http;
      this.$scope = $scope;

      // 
      // 

      $(document).ready(function () {
        $('.seat').click(function () {
          $(this).toggleClass('seatselected');
          var seatno = $(this).attr('id');
          if ($.inArray(seatno, seats) > -1) {
            var a = seats.lastIndexOf(seatno);
            seats.splice(a, 1);
          } else {
            seats.push(seatno);
            $scope.SeatNumbers = seats;
          }
          console.log(seats);
          var seatNum = seats;

          var ticket = seats.length;
          var subTotal = ticket * 150;
          var baseFare = 10 * ticket;
          var total = subTotal + baseFare;

          $('#seatNumbers').html(seats.sort() + '');
          $('#tickets').html(ticket);
          $('#subtotal').html(subTotal);
          $('#ihc').html(baseFare);
          $('#total').html(total);
          sessionStorage.setItem("ticketNum", ticket);
          sessionStorage.setItem("internetCharges", baseFare);
          sessionStorage.setItem("subAmount", subTotal);
          sessionStorage.setItem("totalAmount", total);
          sessionStorage.setItem("seat", seatNum);
        });
      });
    }

    _createClass(BookingComponent, [{
      key: '$onInit',
      value: function $onInit() {
        this.movieName = sessionStorage.getItem('name');
        this.theater = sessionStorage.getItem("seletedTheater");
        this.class = sessionStorage.getItem('myClass');
      }
    }, {
      key: 'SelectGold',
      value: function SelectGold() {
        $(document).ready(function () {
          $("#gold").click(function () {
            $(".Silver").addClass("SilverSelected");
          });
        });
      }
    }, {
      key: 'payment',
      value: function payment() {
        location.href = '/payment';
      }
    }]);

    return BookingComponent;
  }();

  angular.module('myMoviAppApp').component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });
})();
//# sourceMappingURL=booking.controller.js.map
