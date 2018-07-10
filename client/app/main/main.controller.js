'use strict';

(function() {

  class MainController {

    constructor($http, socket) {
      this.$http = $http;
      this.socket = socket;
      this.ShowingMovies=[];
     
      this.mymovies=[];
      this.Theaters=[];      
    }
    $onInit(){
      this.$http.get('/api/mappingendpoints').then(response =>{
        this.ShowingMovies=response.data;
        this.socket.syncUpdates('mappingendpoint', this.ShowingMovies);
      });


      this.$http.get('/api/mymoviess').then(response =>{
        this.mymovies=response.data;
        this.socket.syncUpdates('mymovies', this.mymovies);
        
      });
      // this.$http.get('/api/theaterendpoints').then(response =>{
      //   this.Theaters=response.data;
      //   this.socket.syncUpdates('theaterendpoint', this.Theaters);
      // });
    }

    bookMovie(movieName){

  
      this.selectedMovie=movieName.MovieTitle;
      

      sessionStorage.setItem("name",this.selectedMovie);
      
      console.log(this.selectedMovie);
     
      
    }
   book(){
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
sessionStorage.setItem("seletedTheater",selTheater);
selTheater = selTheater.join();
selTime=selTime.join();
selDate=selDate.join();
this.selClass=this.class;
sessionStorage.setItem('myClass',this.selClass);
sessionStorage.setItem('selectedDate',selDate);
sessionStorage.setItem('selectedTime',selTime);

   location.href=('/booking');
 }

    }
  
  

  angular.module('myMoviAppApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'mainCtrl'
    });
})();
