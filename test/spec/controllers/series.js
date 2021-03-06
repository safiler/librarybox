'use strict';

describe('Controller: SeriesCtrl', function () {

  // load the controller's module
  beforeEach(module('libraryboxApp'));

  var SeriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesCtrl = $controller('SeriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
