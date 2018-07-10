'use strict';

(function(){

class MoviesComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.Movies=[];
    this.socket=socket;
    }
    $onInit(){
      this.$http.get('api/movieendpoints').then(response =>{
        this.Movies=response.data;
        this.socket.syncUpdates('movieendpoint', this.Movies);
      });
    }
    RemoveMovie(Movie){
      this.$http.delete('api/movieendpoints/'+Movie._id);
    }
  SaveMovie() {
    this.$http.post('/api/movieendpoints',{
      MovieName : this.MovieName,
      Genre : this.Genre,
      Year : this.Year
    });
    
  }
  SubmitMovie(){
    sessionStorage.setItem('MovieNames',this.MovieNames);
    location.href= '/theaters';
    }
}

angular.module('myMoviAppApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();
