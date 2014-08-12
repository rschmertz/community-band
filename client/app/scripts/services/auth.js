'use strict';

angular.module('mentorApp.services.auth',[])
  .service('AuthSrv', ['AuthDomain', '$location', function(authDomain, $location){
    var session = {
        token: "null"
    };

    this.isEmailUnique = function(email){
      return authDomain.isEmailUnique(email);
    };

    this.isUsernameUnique = function(username){
      return authDomain.isUsernameUnique(username);
    };

    this.isAuthenticated = function(){
        return !!session.token;
    };

    this.authenticate = function(username, password){
        return authDomain.obtainToken(username, password);
    };

    this.login = function(tokenObj, next){
        //TODO: save token and write it to user cookie
        session.token = tokenObj.token;
        $location.path(next || '/');
    };

    this.register = function(username, email, password){
        return authDomain.register(username, email, password);
    };

    this.logout = function(tokenObj){
        //TODO: restroy token and wipe user cookie
    };
  }]);