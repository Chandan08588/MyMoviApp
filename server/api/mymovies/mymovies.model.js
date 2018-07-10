'use strict';

import mongoose from 'mongoose';

var MymoviesSchema = new mongoose.Schema({
  ID:String,
  Poster:String, 
  Title:String,
  RunTime:Number,
  Genres:Array,
  Company:Array
 
});

export default mongoose.model('MyMovies', MymoviesSchema);
