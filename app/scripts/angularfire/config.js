angular.module('firebase.config', [])
  .constant('FBURL', 'https://deque-3820e.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google'])

  .constant('loginRedirectPath', '/login');
