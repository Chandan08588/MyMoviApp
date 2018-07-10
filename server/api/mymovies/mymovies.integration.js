'use strict';

var app = require('../..');
import request from 'supertest';

var newMymovies;

describe('Mymovies API:', function() {

  describe('GET /api/mymoviess', function() {
    var mymoviess;

    beforeEach(function(done) {
      request(app)
        .get('/api/mymoviess')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mymoviess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(mymoviess).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mymoviess', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mymoviess')
        .send({
          name: 'New Mymovies',
          info: 'This is the brand new mymovies!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMymovies = res.body;
          done();
        });
    });

    it('should respond with the newly created mymovies', function() {
      expect(newMymovies.name).to.equal('New Mymovies');
      expect(newMymovies.info).to.equal('This is the brand new mymovies!!!');
    });

  });

  describe('GET /api/mymoviess/:id', function() {
    var mymovies;

    beforeEach(function(done) {
      request(app)
        .get('/api/mymoviess/' + newMymovies._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mymovies = res.body;
          done();
        });
    });

    afterEach(function() {
      mymovies = {};
    });

    it('should respond with the requested mymovies', function() {
      expect(mymovies.name).to.equal('New Mymovies');
      expect(mymovies.info).to.equal('This is the brand new mymovies!!!');
    });

  });

  describe('PUT /api/mymoviess/:id', function() {
    var updatedMymovies;

    beforeEach(function(done) {
      request(app)
        .put('/api/mymoviess/' + newMymovies._id)
        .send({
          name: 'Updated Mymovies',
          info: 'This is the updated mymovies!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMymovies = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMymovies = {};
    });

    it('should respond with the updated mymovies', function() {
      expect(updatedMymovies.name).to.equal('Updated Mymovies');
      expect(updatedMymovies.info).to.equal('This is the updated mymovies!!!');
    });

  });

  describe('DELETE /api/mymoviess/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mymoviess/' + newMymovies._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mymovies does not exist', function(done) {
      request(app)
        .delete('/api/mymoviess/' + newMymovies._id)
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
