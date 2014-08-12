'use strict';

angular.module('mentorApp.services.urls',[])
  .service('UrlsSrv', ['$route', function($route){
    this.reverse = function(routeName, kwargs){
      kwargs = kwargs || {};

      var newRoute = void 0;

      angular.forEach($route.routes, function(config, route){
        if(config.name == routeName){
          var obj = {};

          if (!(config.keys && config.keys.length)){
            newRoute = route;
            return false;
          }

          angular.forEach(kwargs, function(value, key){
            obj[':' + key] = value;
          });

          var regexp = new RegExp(Object.keys(obj).join("|"),"gi");

          newRoute = route.replace(regexp, function(matched){
            return obj[matched];
          });

          return false;
        }
      });

      return newRoute;
    };
  }]);
