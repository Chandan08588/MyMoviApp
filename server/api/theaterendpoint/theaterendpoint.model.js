'use strict';

import mongoose from 'mongoose';

var TheaterendpointSchema = new mongoose.Schema({
  Name: String,
  City: String,
  Location: String,
});

export default mongoose.model('Theater', TheaterendpointSchema);
