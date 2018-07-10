'use strict';

(function(){

class TheatersComponent {
  constructor($http, socket ) {
    this.message = 'Hello';
    this.$http=$http;
    this.Theaters=[];
    
    
    this.socket=socket;
  }
  $onInit(){
    this.$http.get('/api/theaterendpoints').then(response =>{
      this.Theaters=response.data;
      this.socket.syncUpdates('theaterendpoint', this.Theaters);
    });
    this.MovieNames=sessionStorage.getItem('MovieNames');
  }
  AddTheater(){
    this.$http.post('/api/theaterendpoints',{
      Name:this.Name,
      City:this.City,
      Location:this.Location,
     

    });
    this.Name=' ';
    this.City=' ';
    this.Location= ' ';
   
    window.alert('Theater Added');
 
  }
  RemoveTheater(Theater){
    this.$http.delete('/api/theaterendpoints/'+Theater._id);

  }

  
}

angular.module('myMoviAppApp')
  .component('theaters', {
    templateUrl: 'app/theaters/theaters.html',
    controller: TheatersComponent,
    controllerAs: 'theatersCtrl'
  });

})();
