'use strict';

angular.module('mentorApp.services.resource',[])
  .service('ResourceSrv', [function(){
    this.list = function(deferred){
      var arr = []

      deferred.then(function(responseArray){
        angular.forEach(responseArray, function(responseArrayItem){
          arr.push(responseArrayItem);
        });
      });

      return arr;
    };
  }]);
