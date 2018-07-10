/**
 * Mymovies model events
 */

'use strict';

import {EventEmitter} from 'events';
import Mymovies from './mymovies.model';
var MymoviesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MymoviesEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Mymovies.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MymoviesEvents.emit(event + ':' + doc._id, doc);
    MymoviesEvents.emit(event, doc);
  }
}

export default MymoviesEvents;
