'use strict';

var app = require('../..');
import request from 'supertest';

var newTheaterendpoint;

describe('Theaterendpoint API:', function() {

  describe('GET /api/theaterendpoints', function() {
    var theaterendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/theaterendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theaterendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(theaterendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/theaterendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/theaterendpoints')
        .send({
          name: 'New Theaterendpoint',
          info: 'This is the brand new theaterendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTheaterendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created theaterendpoint', function() {
      expect(newTheaterendpoint.name).to.equal('New Theaterendpoint');
      expect(newTheaterendpoint.info).to.equal('This is the brand new theaterendpoint!!!');
    });

  });

  describe('GET /api/theaterendpoints/:id', function() {
    var theaterendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/theaterendpoints/' + newTheaterendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      theaterendpoint = {};
    });

    it('should respond with the requested theaterendpoint', function() {
      expect(theaterendpoint.name).to.equal('New Theaterendpoint');
      expect(theaterendpoint.info).to.equal('This is the brand new theaterendpoint!!!');
    });

  });

  describe('PUT /api/theaterendpoints/:id', function() {
    var updatedTheaterendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/theaterendpoints/' + newTheaterendpoint._id)
        .send({
          name: 'Updated Theaterendpoint',
          info: 'This is the updated theaterendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTheaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTheaterendpoint = {};
    });

    it('should respond with the updated theaterendpoint', function() {
      expect(updatedTheaterendpoint.name).to.equal('Updated Theaterendpoint');
      expect(updatedTheaterendpoint.info).to.equal('This is the updated theaterendpoint!!!');
    });

  });

  describe('DELETE /api/theaterendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/theaterendpoints/' + newTheaterendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when theaterendpoint does not exist', function(done) {
      request(app)
        .delete('/api/theaterendpoints/' + newTheaterendpoint._id)
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
