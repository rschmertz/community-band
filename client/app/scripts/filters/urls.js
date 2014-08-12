'use strict';

angular.module('mentorApp.filters.urls',[])
  .filter('reverse', ['UrlsSrv', function(urlsSrv){
    return function(kwargs, routeName){
      return '#' + urlsSrv.reverse(routeName, kwargs);
    }
  }]);
