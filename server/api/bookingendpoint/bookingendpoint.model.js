'use strict';

import mongoose from 'mongoose';

var BookingendpointSchema = new mongoose.Schema({
  MovieName: String,
  SeatNumber: String,
  
});

export default mongoose.model('Booking', BookingendpointSchema);
