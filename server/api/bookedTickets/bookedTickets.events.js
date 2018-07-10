/**
 * BookedTickets model events
 */

'use strict';

import {EventEmitter} from 'events';
import BookedTickets from './bookedTickets.model';
var BookedTicketsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BookedTicketsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  BookedTickets.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BookedTicketsEvents.emit(event + ':' + doc._id, doc);
    BookedTicketsEvents.emit(event, doc);
  }
}

export default BookedTicketsEvents;
