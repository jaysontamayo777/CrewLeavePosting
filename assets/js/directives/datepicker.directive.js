/**
 * @module CrewLeavePostingApp this is the main app module.
 * @directive clDdatepicker
 * Use as <cl-datepicker></cl-datepicker
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .directive('clDdatepicker', clDdatepicker);

  function clDdatepicker() {
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        clOption: '=clOption',
        clShow: '='
      },
    };
    return directive;

    function link(scope, element, attrs) {
      scope.$watch('clShow', function() {
        $('#' + attr.id).datepicker(scope.clOption);
      })
    }

  }
})();