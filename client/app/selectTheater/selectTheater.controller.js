'use strict';

(function(){

class SelectTheaterComponent {
 
  constructor($http, socket) {
    this.$http = $http;
    this.socket = socket;
   
    this.mymovies=[];
    this.Theaters=[];
  }
  $onInit(){
    this.$http.get('/api/mymoviess').then(response =>{
      this.mymovies=response.data;
      this.socket.syncUpdates('mymovies', this.mymovies);
      
    });
    this.$http.get('/api/theaterendpoints').then(response =>{
      this.Theaters=response.data;
      this.socket.syncUpdates('theaterendpoint', this.Theaters);
    });
  }
  bookSeat(){
    var myTheater=this.theater;

// sessionStorage.setItem("seletedTheater",selTheater);

    location.href=('/booking');
  }
}

angular.module('myMoviAppApp')
  .component('selectTheater', {
    templateUrl: 'app/selectTheater/selectTheater.html',
    controller: SelectTheaterComponent,
    controllerAs: 'selectTheaterCtrl'
  });

})();
