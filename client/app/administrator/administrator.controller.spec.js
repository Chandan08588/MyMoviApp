'use strict';

describe('Component: AdministratorComponent', function () {

  // load the controller's module
  beforeEach(module('myMoviAppApp'));

  var AdministratorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministratorComponent = $componentController('administrator', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
