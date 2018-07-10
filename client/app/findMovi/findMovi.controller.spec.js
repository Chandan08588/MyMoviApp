'use strict';

describe('Component: FindMoviComponent', function () {

  // load the controller's module
  beforeEach(module('myMoviAppApp'));

  var FindMoviComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FindMoviComponent = $componentController('findMovi', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
