'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var FindMoviComponent = function () {
    function FindMoviComponent($http, socket) {
      _classCallCheck(this, FindMoviComponent);

      this.message = 'Hello';
      this.$http = $http;

      this.socket = socket;

      var MovieData = [];
      this.mymovies = [];
      this.MovieData = MovieData;
    }

    _createClass(FindMoviComponent, [{
      key: 'SearchMovie',
      value: function SearchMovie() {
        var _this = this;

        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=0c1514f556254507975ce7e299e230d0&query=' + this.MovieName + '&year=' + this.Year).then(function (response) {
          var MovieID = response.data.results[0].id;
          _this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=0c1514f556254507975ce7e299e230d0').then(function (response) {
            _this.MovieData = response.data;
            console.log(_this.MovieData);
            _this.MovieName = ' ';
            _this.Year = ' ';
          });
        });
      }
    }, {
      key: 'RemoveMovie',
      value: function RemoveMovie(MyMovies) {
        this.$http.delete('/api/mymoviess/' + MyMovies._id);
      }
    }, {
      key: 'AddMovie',
      value: function AddMovie() {
        this.$http.post('/api/mymoviess', {
          ID: this.MovieData.id,
          Poster: this.MovieData.poster_path,
          Title: this.MovieData.title,
          RunTime: this.MovieData.runtime,
          Genres: this.MovieData.genres,
          Company: this.MovieData.production_companies

        });
        window.alert("Movie Added");
      }
    }, {
      key: '$onInit',
      value: function $onInit() {
        var _this2 = this;

        this.$http.get('/api/mymoviess').then(function (response) {
          _this2.mymovies = response.data;
          _this2.socket.syncUpdates('mymovies', _this2.mymovies);
          console.log(_this2.mymovies);
        });
      }
    }]);

    return FindMoviComponent;
  }();

  angular.module('myMoviAppApp').component('findMovi', {
    templateUrl: 'app/findMovi/findMovi.html',
    controller: FindMoviComponent,
    controllerAs: 'findMoviCtrl'
  });
})();
//# sourceMappingURL=findMovi.controller.js.map
