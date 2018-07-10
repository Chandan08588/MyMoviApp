'use strict';

var app = require('../..');
import request from 'supertest';

var newBookedTickets;

describe('BookedTickets API:', function() {

  describe('GET /api/bookedTicketss', function() {
    var bookedTicketss;

    beforeEach(function(done) {
      request(app)
        .get('/api/bookedTicketss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bookedTicketss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(bookedTicketss).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/bookedTicketss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/bookedTicketss')
        .send({
          name: 'New BookedTickets',
          info: 'This is the brand new bookedTickets!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBookedTickets = res.body;
          done();
        });
    });

    it('should respond with the newly created bookedTickets', function() {
      expect(newBookedTickets.name).to.equal('New BookedTickets');
      expect(newBookedTickets.info).to.equal('This is the brand new bookedTickets!!!');
    });

  });

  describe('GET /api/bookedTicketss/:id', function() {
    var bookedTickets;

    beforeEach(function(done) {
      request(app)
        .get('/api/bookedTicketss/' + newBookedTickets._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bookedTickets = res.body;
          done();
        });
    });

    afterEach(function() {
      bookedTickets = {};
    });

    it('should respond with the requested bookedTickets', function() {
      expect(bookedTickets.name).to.equal('New BookedTickets');
      expect(bookedTickets.info).to.equal('This is the brand new bookedTickets!!!');
    });

  });

  describe('PUT /api/bookedTicketss/:id', function() {
    var updatedBookedTickets;

    beforeEach(function(done) {
      request(app)
        .put('/api/bookedTicketss/' + newBookedTickets._id)
        .send({
          name: 'Updated BookedTickets',
          info: 'This is the updated bookedTickets!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBookedTickets = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBookedTickets = {};
    });

    it('should respond with the updated bookedTickets', function() {
      expect(updatedBookedTickets.name).to.equal('Updated BookedTickets');
      expect(updatedBookedTickets.info).to.equal('This is the updated bookedTickets!!!');
    });

  });

  describe('DELETE /api/bookedTicketss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/bookedTicketss/' + newBookedTickets._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when bookedTickets does not exist', function(done) {
      request(app)
        .delete('/api/bookedTicketss/' + newBookedTickets._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
