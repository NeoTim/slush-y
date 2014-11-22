;(function(){
'use strict';
angular
  .module('asd', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'restangular',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'core',
  'app.modules'

  ])
  .run( run );

  /* @inject */
  function run($rootScope, $location, Auth, $state) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/signin');
        }
      });
      if(next.name === 'home'){
        $rootScope.$broadcast('y:changed', next);
      }
    });
  }

}).call(this);