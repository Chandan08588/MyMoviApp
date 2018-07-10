'use strict';

describe('Component: MoviemapingComponent', function () {

  // load the controller's module
  beforeEach(module('myMoviAppApp'));

  var MoviemapingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MoviemapingComponent = $componentController('moviemaping', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
