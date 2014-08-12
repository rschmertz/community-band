'use strict';

angular.module('mentorApp.domains.auth',[])
  .service('AuthDomain', ['$q', function($q){
    this.isEmailUnique = function(email){
      var deferred = $q.defer();

      deferred.resolve(true);

      return deferred.promise;
    };

    this.isUsernameUnique = function(username){
      var deferred = $q.defer();

      deferred.resolve(false);

      return deferred.promise;
    };

    this.obtainToken = function(username, password){
      var deferred = $q.defer();

      setTimeout(function(){
        deferred.resolve({
          token: 'hehe'
        });
      }, 3000);
      return deferred.promise;
    };

    this.register = function(username, password){
      var deferred = $q.defer();

      setTimeout(function(){
        deferred.resolve({
          token: 'hehe'
        });
      }, 3000);

      return deferred.promise;
    };
  }])
