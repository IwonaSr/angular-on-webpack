import home from './index';

describe('Controller: Home', function() {

  beforeEach(window.module(home));

  var $controller;

  beforeEach(window.inject(function(_$controller_) {
    $controller = _$controller_;
  }));


  it('name is initialized to Beautiful World', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('Beautiful World');
  });
});