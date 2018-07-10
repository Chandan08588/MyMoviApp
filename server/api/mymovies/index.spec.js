'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mymoviesCtrlStub = {
  index: 'mymoviesCtrl.index',
  show: 'mymoviesCtrl.show',
  create: 'mymoviesCtrl.create',
  update: 'mymoviesCtrl.update',
  destroy: 'mymoviesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mymoviesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mymovies.controller': mymoviesCtrlStub
});

describe('Mymovies API Router:', function() {

  it('should return an express router instance', function() {
    expect(mymoviesIndex).to.equal(routerStub);
  });

  describe('GET /api/mymoviess', function() {

    it('should route to mymovies.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mymoviesCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mymoviess/:id', function() {

    it('should route to mymovies.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mymoviesCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mymoviess', function() {

    it('should route to mymovies.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mymoviesCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mymoviess/:id', function() {

    it('should route to mymovies.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mymoviesCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mymoviess/:id', function() {

    it('should route to mymovies.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mymoviesCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mymoviess/:id', function() {

    it('should route to mymovies.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mymoviesCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
