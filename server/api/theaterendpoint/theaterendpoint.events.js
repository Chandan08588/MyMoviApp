/**
 * Theaterendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Theaterendpoint from './theaterendpoint.model';
var TheaterendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TheaterendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Theaterendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TheaterendpointEvents.emit(event + ':' + doc._id, doc);
    TheaterendpointEvents.emit(event, doc);
  }
}

export default TheaterendpointEvents;
