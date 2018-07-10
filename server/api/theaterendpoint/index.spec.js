'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var theaterendpointCtrlStub = {
  index: 'theaterendpointCtrl.index',
  show: 'theaterendpointCtrl.show',
  create: 'theaterendpointCtrl.create',
  update: 'theaterendpointCtrl.update',
  destroy: 'theaterendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var theaterendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './theaterendpoint.controller': theaterendpointCtrlStub
});

describe('Theaterendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(theaterendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/theaterendpoints', function() {

    it('should route to theaterendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'theaterendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/theaterendpoints/:id', function() {

    it('should route to theaterendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'theaterendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/theaterendpoints', function() {

    it('should route to theaterendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'theaterendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/theaterendpoints/:id', function() {

    it('should route to theaterendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'theaterendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/theaterendpoints/:id', function() {

    it('should route to theaterendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'theaterendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/theaterendpoints/:id', function() {

    it('should route to theaterendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'theaterendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
