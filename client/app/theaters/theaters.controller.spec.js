'use strict';

describe('Component: TheatersComponent', function () {

  // load the controller's module
  beforeEach(module('myMoviAppApp'));

  var TheatersComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TheatersComponent = $componentController('theaters', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
