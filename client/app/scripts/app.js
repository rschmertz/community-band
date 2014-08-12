'use strict';

angular
  .module('mentorApp', [
    'mentorApp.config',

    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',

    'mentorApp.controllers',
    'mentorApp.directives',
    'mentorApp.domains',
    'mentorApp.models',
    'mentorApp.services',
    'mentorApp.filters',

    'bootstrap-tagsinput',
    'mgcrea.ngStrap',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        name: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', 'localization', 'config',
    function($rootScope, localization, config) {
      $rootScope.localized = localization;
      $rootScope.tagsUrl = config.apiBaseUrl + config.tagsUrl;
    }
  ])
  .config(['$popoverProvider', function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
      html: true
    })
  }]);
