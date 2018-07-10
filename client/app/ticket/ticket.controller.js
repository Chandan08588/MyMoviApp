'use strict';

(function(){

class TicketComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket=socket;
    this.mymovies=[];
    
  }




  $onInit(){
    this.$http.get('/api/mymoviess').then(response =>{
      this.mymovies=response.data;
      this.socket.syncUpdates('mymovies', this.mymovies);
      
    });


    this.movieName= sessionStorage.getItem('name');
    this.poster=sessionStorage.getItem('mPoster');
    this.total= sessionStorage.getItem('totalAmount');
    this.ticket=sessionStorage.getItem('ticketNum');
    this.internetHandling=sessionStorage.getItem('internetCharges');
    this.subCharges= sessionStorage.getItem('subAmount');
    
   this.SeatNumbers =sessionStorage.getItem('seat');
   this.theater= sessionStorage.getItem('seletedTheater');
   this.class=sessionStorage.getItem('myClass');
  this.date= sessionStorage.getItem('selectedDate');
  this.time=sessionStorage.getItem('selectedTime');

  }
}

angular.module('myMoviAppApp')
  .component('ticket', {
    templateUrl: 'app/ticket/ticket.html',
    controller: TicketComponent,
    controllerAs: 'ticketCtrl'
  });

})();
