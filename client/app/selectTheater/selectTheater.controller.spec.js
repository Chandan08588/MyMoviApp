'use strict';

describe('Component: SelectTheaterComponent', function () {

  // load the controller's module
  beforeEach(module('myMoviAppApp'));

  var SelectTheaterComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SelectTheaterComponent = $componentController('selectTheater', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
