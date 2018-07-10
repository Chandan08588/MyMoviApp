'use strict';

(function () {

  class MoviemapingComponent {
    constructor($http, socket, $scope) {
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
          var data = ($('#hours').val()) + " : " + ($('#minutes').val()) + " " + ($('#ampm').val());
          $('#restime').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
      var date = $(document).ready(function () {
        $('#adddate').click(function () {
          var data = ($('#days').val()) + " : " + ($('#months').val()) + " " + ($('#years').val());
          $('#resdate').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
      $(document).ready(function () {
        $('#addtheater').click(function () {
          var data = ($('#theater').val());
          $('#restheater').append("<option value='" + data + "'>" + data + "</option>");
        });
      });
    }
    MapMovie() {
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
      this.movie=' ';
      this.city=' ';
      this.mtime=' ';
      this.mdate=' ';
      this.mtheater=' ';
    }
    $onInit() {
      this.$http.get('/api/mymoviess').then(response => {
        this.mymovies = response.data;
        this.socket.syncUpdates('mymovies', this.mymovies);
      });
      this.$http.get('/api/theaterendpoints').then(response => {
        this.Theaters = response.data;
        this.socket.syncUpdates('theaterendpoint', this.Theaters);
      });
      this.$http.get('/api/mappingendpoints').then(response => {
        this.ShowingMovies = response.data;
        this.socket.syncUpdates('mappingendpoint', this.ShowingMovies);
      });
    }
    delMovie(ShowingMovies) {
      this.$http.delete('/api/mappingendpoints/' + ShowingMovies._id);
    }
  }
  angular.module('myMoviAppApp')
    .component('moviemaping', {
      templateUrl: 'app/moviemaping/moviemaping.html',
      controller: MoviemapingComponent,
      controllerAs: 'moviemapingCtrl'
    });

})();
