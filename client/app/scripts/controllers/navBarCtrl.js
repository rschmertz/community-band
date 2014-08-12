'use strict';

angular.module('mentorApp.controllers.navBar', [])
  .controller('NavBarCtrl', ['$scope', 'AuthSrv', function ($scope, authSrv) {
  	$scope.isAuthenticated = authSrv.isAuthenticated;
  }]);
