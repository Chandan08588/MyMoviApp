'use strict';

(function(){

class PaymentComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.bookings=[];
  }

  $onInit(){
    

    this.movieName= sessionStorage.getItem('name');
   
   this.total= sessionStorage.getItem('totalAmount');
   this.ticket=sessionStorage.getItem('ticketNum');
   this.internetHandling=sessionStorage.getItem('internetCharges');
   this.subCharges= sessionStorage.getItem('subAmount');
   this.theater= sessionStorage.getItem('seletedTheater');
  



  }

  

  payment(){
    this.$http.post('/api/bookedTicketss ',{
      Name:this.name,
      Contact:this.contact,
      Movie: sessionStorage.getItem('name'),      
      Tickets: sessionStorage.getItem("ticketNum"),
      SeatNumber:sessionStorage.getItem("seat"),
      AmountPaid: sessionStorage.getItem("totalAmount")

    });
  }
}

angular.module('myMoviAppApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
