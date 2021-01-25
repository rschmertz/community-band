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
        templateUrl: 'views/main.html?date=20210124',
        controller: 'MainCtrl',
        name: 'main'
      })
      .when('/main-test', {
        templateUrl: 'views/main-test.html',
        controller: 'MainCtrl',
        name: 'maine'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
          //controller: 'AboutCtrl',
        name: 'abgout' // What does this do?
      })
      .when('/repertoire', {
        templateUrl: 'views/repertoire.html',
        controller: 'RepertoireCtrl',
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
      .when('/press/', {
        templateUrl: 'views/press.html',
      })
      .when('/events/', {
        templateUrl: 'views/events.html',
      })
      .when('/blog2/', {
        templateUrl: 'views/blog2.html',
        controller: 'BlogCtrl',
        name: 'blog'
      })
      .when('/documents/', {
        templateUrl: 'views/docs.html',
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
  ])
  .constant('noCacheHash', Math.floor(Math.random() * 99999999999999).toString(36));

// Lord help me, there must be a better way
$('div.navbar-collapse.collapse a').click(function (e) {
    $(e.currentTarget).closest('div').removeClass('in').animate();
})
