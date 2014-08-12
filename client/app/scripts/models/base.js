'use strict';

angular.module('mentorApp.models.base',[])
  .factory('BaseModel', [function(){
    var F = function(){
        this._phrase = null;
    }

    F.prototype.phrase = function(p, bool) {
        if (arguments.length == 1){
            return this._phrase == p;
        } else {
            this._phrase = !!bool ? p : null;
        }
    };

    return F;
  }]);
