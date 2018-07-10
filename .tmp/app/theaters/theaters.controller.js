'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var TheatersComponent = function () {
    function TheatersComponent($http, socket) {
      _classCallCheck(this, TheatersComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.Theaters = [];

      this.socket = socket;
    }

    _createClass(TheatersComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/theaterendpoints').then(function (response) {
          _this.Theaters = response.data;
          _this.socket.syncUpdates('theaterendpoint', _this.Theaters);
        });
        this.MovieNames = sessionStorage.getItem('MovieNames');
      }
    }, {
      key: 'AddTheater',
      value: function AddTheater() {
        this.$http.post('/api/theaterendpoints', {
          Name: this.Name,
          City: this.City,
          Location: this.Location

        });
        this.Name = ' ';
        this.City = ' ';
        this.Location = ' ';

        window.alert('Theater Added');
      }
    }, {
      key: 'RemoveTheater',
      value: function RemoveTheater(Theater) {
        this.$http.delete('/api/theaterendpoints/' + Theater._id);
      }
    }]);

    return TheatersComponent;
  }();

  angular.module('myMoviAppApp').component('theaters', {
    templateUrl: 'app/theaters/theaters.html',
    controller: TheatersComponent,
    controllerAs: 'theatersCtrl'
  });
})();
//# sourceMappingURL=theaters.controller.js.map
