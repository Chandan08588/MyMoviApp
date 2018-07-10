'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MoviesComponent = function () {
    function MoviesComponent($http, socket) {
      _classCallCheck(this, MoviesComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.Movies = [];
      this.socket = socket;
    }

    _createClass(MoviesComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('api/movieendpoints').then(function (response) {
          _this.Movies = response.data;
          _this.socket.syncUpdates('movieendpoint', _this.Movies);
        });
      }
    }, {
      key: 'RemoveMovie',
      value: function RemoveMovie(Movie) {
        this.$http.delete('api/movieendpoints/' + Movie._id);
      }
    }, {
      key: 'SaveMovie',
      value: function SaveMovie() {
        this.$http.post('/api/movieendpoints', {
          MovieName: this.MovieName,
          Genre: this.Genre,
          Year: this.Year
        });
      }
    }, {
      key: 'SubmitMovie',
      value: function SubmitMovie() {
        sessionStorage.setItem('MovieNames', this.MovieNames);
        location.href = '/theaters';
      }
    }]);

    return MoviesComponent;
  }();

  angular.module('myMoviAppApp').component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });
})();
//# sourceMappingURL=movies.controller.js.map
