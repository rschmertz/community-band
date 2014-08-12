angular.module('mentorApp.directives.unique', [])
  .directive('uniqueEmail', ['AuthSrv', function (authSrv) {
    return {
      require:'ngModel',
      restrict:'A',
      link:function (scope, el, attrs, ctrl) {
        ctrl.$parsers.push(function (viewValue) {
          if (viewValue) {
            AuthSrv.isEmailUnique(viewValue).then(function(isIt){
              ctrl.$setValidity('uniqueEmail', isIt);
            });

            return viewValue;
          }
        });
      }
    };
  }])
  .directive('uniqueUsername', ['AuthSrv', function (authSrv) {
    return {
      require:'ngModel',
      restrict:'A',
      link:function (scope, el, attrs, ctrl) {
        ctrl.$parsers.push(function (viewValue) {
          if (viewValue) {
            AuthSrv.isUsernameUnique(viewValue).then(function(isIt){
              ctrl.$setValidity('uniqueUsername', isIt);
            });

            return viewValue;
          }
        });
      }
    };
  }]);
