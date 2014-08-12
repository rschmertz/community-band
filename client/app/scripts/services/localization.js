'use strict'

angular.module('mentorApp.services.localization', [])
  .service('localization', ['$http', 'config',
    function($http, config) {
      var resources = {
        data: {}
      };

      $http.get('/resources/localization_' + config.default_locale + '.json').success(function (data, code){
        resources.data = data;
      });

      return resources;
    }
  ]);
