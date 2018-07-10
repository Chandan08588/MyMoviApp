'use strict';

(function(){

class FindMoviComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http=$http;
   
    this.socket=socket;
    
    var MovieData=[];
    this.mymovies=[];
    this.MovieData=MovieData;
    
   
   
  }

  SearchMovie() {
    this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=0c1514f556254507975ce7e299e230d0&query=' + this.MovieName + '&year=' + this.Year).then(response => {
      var MovieID = response.data.results[0].id;
      this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=0c1514f556254507975ce7e299e230d0').then(response => {
        this.MovieData = response.data;
        console.log(this.MovieData);
        this.MovieName=' ';
        this.Year=' ';
        
      });
    });
  }

  RemoveMovie(MyMovies){
    this.$http.delete('/api/mymoviess/'+MyMovies._id);
  }
  

  
  AddMovie(){
    this.$http.post('/api/mymoviess',{
      ID:this.MovieData.id,
      Poster:this.MovieData.poster_path,
      Title:this.MovieData.title,
      RunTime:this.MovieData.runtime,
      Genres: this.MovieData.genres,
      Company:this.MovieData.production_companies

    });
  window.alert("Movie Added");
    }
    $onInit(){
      this.$http.get('/api/mymoviess').then(response =>{
        this.mymovies=response.data;
        this.socket.syncUpdates('mymovies', this.mymovies);
        console.log(this.mymovies);
      });
    }

  


}

angular.module('myMoviAppApp')
  .component('findMovi', {
    templateUrl: 'app/findMovi/findMovi.html',
    controller: FindMoviComponent,
    controllerAs: 'findMoviCtrl'
  });

})();
