'use strict';

import mongoose from 'mongoose';

var BookedTicketsSchema = new mongoose.Schema({
  Name: String,
  Contact: String,
  Movie: String,
  City: String,
  Theater: String,
  Date:String,
  Time:String,
  Tickets: Number,
  SeatNumber:String,
  AmountPaid:Number

});

export default mongoose.model('Bookings', BookedTicketsSchema);
