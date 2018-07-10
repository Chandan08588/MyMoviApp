'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MoviemapingComponent = function () {
    function MoviemapingComponent($http, socket, $scope) {
      _classCallCheck(this, MoviemapingComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.Theaters = [];
      this.mymovies = [];
      this.showTime = [];
      this.socket = socket;
      this.$scope = $scope;
      this.ShowingMovies = [];
      $(document).ready(function () {
        $('#addtime').click(function () {
          var data = $('#hours').val() + " : " + $('#minutes').val() + " " + $('#ampm').val();
          $('#restime').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
      var date = $(document).ready(function () {
        $('#adddate').click(function () {
          var data = $('#days').val() + " : " + $('#months').val() + " " + $('#years').val();
          $('#resdate').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
      $(document).ready(function () {
        $('#addtheater').click(function () {
          var data = $('#theater').val();
          $('#restheater').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
    }

    _createClass(MoviemapingComponent, [{
      key: 'MapMovie',
      value: function MapMovie() {
        var rdate = document.getElementById('resdate'),
            opts = rdate.getElementsByTagName('option'),
            showDates = [];
        for (var i = 0, len = opts.length; i < len; i++) {
          showDates.push(opts[i].value);
        }
        var rTime = document.getElementById('restime'),
            opts = rTime.getElementsByTagName('option'),
            showTimes = [];
        for (var i = 0, len = opts.length; i < len; i++) {
          showTimes.push(opts[i].value);
        }
        var rTheater = document.getElementById('restheater'),
            opts = rTheater.getElementsByTagName('option'),
            showTheaters = [];
        for (var i = 0, len = opts.length; i < len; i++) {
          showTheaters.push(opts[i].value);
        }
        this.$http.post('/api/mappingendpoints', {
          MovieTitle: this.movie,
          City: this.city,
          Theater: showTheaters,
          ShowDate: showDates,
          ShowTime: showTimes
        });
        window.alert("Movie Mapped");
        this.movie = ' ';
        this.city = ' ';
        this.mtime = ' ';
        this.mdate = ' ';
        this.mtheater = ' ';
      }
    }, {
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
        this.$http.get('/api/mappingendpoints').then(function (response) {
          _this.ShowingMovies = response.data;
          _this.socket.syncUpdates('mappingendpoint', _this.ShowingMovies);
        });
      }
    }, {
      key: 'delMovie',
      value: function delMovie(ShowingMovies) {
        this.$http.delete('/api/mappingendpoints/' + ShowingMovies._id);
      }
    }]);

    return MoviemapingComponent;
  }();

  angular.module('myMoviAppApp').component('moviemaping', {
    templateUrl: 'app/moviemaping/moviemaping.html',
    controller: MoviemapingComponent,
    controllerAs: 'moviemapingCtrl'
  });
})();
//# sourceMappingURL=moviemaping.controller.js.map
