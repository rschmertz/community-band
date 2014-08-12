'use strict';

angular.module('mentorApp.directives.activeUrl', [])
  .directive('activeUrl', [
    '$location',
    function($location) {
      return {
        link: function(scope, elm, attrs) {

          if (!attrs.activeClass) {
            attrs.activeClass = "active";
          }

          var activeUrl = attrs.activeUrl;

          if (activeUrl.charAt(0) == "#"){
            activeUrl = activeUrl.substring(1);
          }

          var isNotStrictQquality = attrs.activeUrl.substr(attrs.activeUrl.length - 1) === "*";
          if (isNotStrictQquality) {
            activeUrl = activeUrl.substring(0, activeUrl.length - 1);
          }

          function _setActive() {
            if ($location.path() === activeUrl || (isNotStrictQquality && $location.path().indexOf(activeUrl) != -1)) {
              elm.addClass(attrs.activeClass);
              elm.removeClass(attrs.notActiveClass);
            } else {
              elm.removeClass(attrs.activeClass);
              elm.addClass(attrs.notActiveClass);
            }
          }

          if (elm.hasClass('ignore-active')) {
            elm.removeClass(attrs.activeClass);
            elm.addClass(attrs.notActiveClass);
          } else {
            _setActive();

            scope.$on('$routeChangeStart', function(next, current) {
              _setActive();
            });
          }
        }
      };
    }
  ]);