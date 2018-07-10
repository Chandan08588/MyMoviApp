'use strict';

import mongoose from 'mongoose';

var MappingendpointSchema = new mongoose.Schema({
  MovieTitle: String,
  City:String,
  Theater:Array,
  ShowDate:Array,
  ShowTime:Array
});

export default mongoose.model('ShowingMovies', MappingendpointSchema);
