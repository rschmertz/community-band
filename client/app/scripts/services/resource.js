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
  }])
    .factory('CardList', function($resource) {
        return $resource('https://api.trello.com/1/lists/566397b374bba06e49402f2d/cards'); // Note the full endpoint address
    })
    .factory('CardAttachments', function ($resource) {
        return $resource('https://api.trello.com/1/cards/:id/attachments');
    });
