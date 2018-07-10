'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bookedTicketsCtrlStub = {
  index: 'bookedTicketsCtrl.index',
  show: 'bookedTicketsCtrl.show',
  create: 'bookedTicketsCtrl.create',
  update: 'bookedTicketsCtrl.update',
  destroy: 'bookedTicketsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var bookedTicketsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bookedTickets.controller': bookedTicketsCtrlStub
});

describe('BookedTickets API Router:', function() {

  it('should return an express router instance', function() {
    expect(bookedTicketsIndex).to.equal(routerStub);
  });

  describe('GET /api/bookedTicketss', function() {

    it('should route to bookedTickets.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'bookedTicketsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/bookedTicketss/:id', function() {

    it('should route to bookedTickets.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'bookedTicketsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/bookedTicketss', function() {

    it('should route to bookedTickets.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'bookedTicketsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/bookedTicketss/:id', function() {

    it('should route to bookedTickets.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'bookedTicketsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/bookedTicketss/:id', function() {

    it('should route to bookedTickets.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'bookedTicketsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/bookedTicketss/:id', function() {

    it('should route to bookedTickets.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'bookedTicketsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
