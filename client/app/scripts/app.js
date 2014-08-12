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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        name: 'about'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        name: 'gallery'
      })      
      .when('/gallery-item', {
        templateUrl: 'views/gallery-item.html',
        controller: 'GalleryItemCtrl',
        name: 'galleryItem'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        name: 'blog'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        name: 'contact'
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
  .config(['$popoverProvider',
    function($popoverProvider) {
      angular.extend($popoverProvider.defaults, {
        html: true
      })
    }
  ]);