import home from './index';

describe('Controller: Home', () => {

  beforeEach(window.module(home));

  var $controller;

  beforeEach(window.inject((_$controller_) => {
    $controller = _$controller_;
  }));


  it('name is initialized to Beautiful World', () => {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('Beautiful World');
  });
});