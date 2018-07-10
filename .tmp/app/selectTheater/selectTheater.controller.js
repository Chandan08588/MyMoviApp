'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var SelectTheaterComponent = function () {
    function SelectTheaterComponent($http, socket) {
      _classCallCheck(this, SelectTheaterComponent);

      this.$http = $http;
      this.socket = socket;

      this.mymovies = [];
      this.Theaters = [];
    }

    _createClass(SelectTheaterComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/mymoviess').then(function (response) {
          _this.mymovies = response.data;
          _this.socket.syncUpdates('mymovies', _this.mymovies);
        });
        this.$http.get('/api/theaterendpoints').then(function (response) {
          _this.Theaters = response.data;
          _this.socket.syncUpdates('theaterendpoint', _this.Theaters);
        });
      }
    }, {
      key: 'bookSeat',
      value: function bookSeat() {
        var myTheater = this.theater;

        // sessionStorage.setItem("seletedTheater",selTheater);

        location.href = '/booking';
      }
    }]);

    return SelectTheaterComponent;
  }();

  angular.module('myMoviAppApp').component('selectTheater', {
    templateUrl: 'app/selectTheater/selectTheater.html',
    controller: SelectTheaterComponent,
    controllerAs: 'selectTheaterCtrl'
  });
})();
//# sourceMappingURL=selectTheater.controller.js.map
