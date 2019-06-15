/*global angular:true, $:true, moment:true*/

/**
 * @module CrewLeavePostingApp this is the main app module.
 * @directive clDdatepicker
 * Use as <cl-datepicker></cl-datepicker>
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .directive('clDatepicker', clDatepicker);

  clDatepicker.$inject = ['$window'];

  function clDatepicker($window) {
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        clOption: '=clOption',
      },
    };
    return directive;

    function link(scope, element, attrs) {
      var $date = $('#' + attrs.id);
      $date.datepicker(scope.clOption);

      if (scope.clOption.hasOwnProperty('getDate')) {
        $date.datepicker('getDate', function() {});
      }
    }

  }
})();

/*global angular:true, $:true, moment:true*/

/**
 * @module CrewLeavePostingApp this is the main app module.
 * @directive clDdatepicker
 * Use as <cl-datepicker></cl-datepicker>
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .directive('clDatepicker', clDatepicker);

  clDatepicker.$inject = ['$window'];

  function clDatepicker($window) {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      compile: compile
    };
    return directive;

    function compile() {
      return {
        pre: function(scope, element, attrs, ngModelCtrl) {
          var format, dateObj;
          format = (!attrs.dpFormat) ? 'd/m/yyyy' : attrs.dpFormat;
          if (!attrs.initdate && !attrs.dpFormat) {
            // If there is no initdate attribute than we will get todays date as the default
            dateObj = new Date();
            scope[attrs.ngModel] = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
          } else if (!attrs.initdate) {
            // Otherwise set as the init date
            scope[attrs.ngModel] = attrs.initdate;
          } else {
            console.log('test')
              // I could put some complex logic that changes the order of the date string I
              // create from the dateObj based on the format, but I'll leave that for now
              // Or I could switch case and limit the types of formats...
          }
          // Initialize the date-picker
          $(element).datepicker({
            format: format,
          }).on('changeDate', function(ev) {
            // To me this looks cleaner than adding $apply(); after everything.
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(ev.format(format));
            });
          });
        }
      }
    }

  }
})();