'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = function () {
    function MainController($http, socket) {
      _classCallCheck(this, MainController);

      this.$http = $http;
      this.socket = socket;
      this.ShowingMovies = [];

      this.mymovies = [];
      this.Theaters = [];
    }

    _createClass(MainController, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/mappingendpoints').then(function (response) {
          _this.ShowingMovies = response.data;
          _this.socket.syncUpdates('mappingendpoint', _this.ShowingMovies);
        });

        this.$http.get('/api/mymoviess').then(function (response) {
          _this.mymovies = response.data;
          _this.socket.syncUpdates('mymovies', _this.mymovies);
        });
        // this.$http.get('/api/theaterendpoints').then(response =>{
        //   this.Theaters=response.data;
        //   this.socket.syncUpdates('theaterendpoint', this.Theaters);
        // });
      }
    }, {
      key: 'bookMovie',
      value: function bookMovie(movieName) {

        this.selectedMovie = movieName.MovieTitle;

        sessionStorage.setItem("name", this.selectedMovie);

        console.log(this.selectedMovie);
      }
    }, {
      key: 'book',
      value: function book() {
        var rTheater = document.getElementById('tName'),
            opts = rTheater.getElementsByTagName('option'),
            selTheater = [];

        for (var i = 1, len = opts.length; i < len; i++) {
          selTheater.push(opts[i].value);
        }
        var rDate = document.getElementById('tDate'),
            opts = rDate.getElementsByTagName('option'),
            selDate = [];

        for (var i = 1, len = opts.length; i < len; i++) {
          selDate.push(opts[i].value);
        }
        var rTime = document.getElementById('tTime'),
            opts = rTime.getElementsByTagName('option'),
            selTime = [];

        for (var i = 1, len = opts.length; i < len; i++) {
          selTime.push(opts[i].value);
        }
        sessionStorage.setItem("seletedTheater", selTheater);
        selTheater = selTheater.join();
        selTime = selTime.join();
        selDate = selDate.join();
        this.selClass = this.class;
        sessionStorage.setItem('myClass', this.selClass);
        sessionStorage.setItem('selectedDate', selDate);
        sessionStorage.setItem('selectedTime', selTime);

        location.href = '/booking';
      }
    }]);

    return MainController;
  }();

  angular.module('myMoviAppApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'mainCtrl'
  });
})();
//# sourceMappingURL=main.controller.js.map
