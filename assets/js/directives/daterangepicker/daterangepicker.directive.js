/**
 * 
 * @module CrewLeavePostingApp this is the main app module.
 * @directive clDaterangepicker
 * Use as <cl-daterangepicker></cl-daterangepicker> in html
 * 
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .directive('clDaterangepicker', clDaterangepicker);

  clDaterangepicker.$inject = ['$window'];

  function clDaterangepicker($window) {
    var directive = {
      restrict: 'E',
      scope: {
        dateFromFormat: '=dateFromFormat',
        dateFromLabel: '@dateFromLabel',
        dateFromModel: '=dateFromModel',

        dateToFormat: '=dateToFormat',
        dateToLabel: '@dateToLabel',
        dateToModel: '=dateToModel',
      },
      templateUrl: 'assets/js/directives/daterangepicker/daterangepicker.directive.html',
      compile: compile
    };
    return directive;

    /**
     * @var {$dateFrom} input element for startDate in daterangepicker
     * @var {$dateTo} input element for endDate in daterangepicker
     *
     */

    function compile() {
      return {
        post: function(scope, element, attrs) {
          var DATE_FROM_ID = 'clDateFrom';
          var DATE_TO_ID = 'clDateTo';

          var inputsDateFrom = document.querySelectorAll('.cb-daterangepicker__dateFrom-input')
          var inputsDateTo = document.querySelectorAll('.cb-daterangepicker__dateTo-input')

          inputsDateFrom.forEach(function(input, i) {
            input.setAttribute('id', DATE_FROM_ID + i);
            input.setAttribute('name', DATE_FROM_ID + i);
          });

          inputsDateTo.forEach(function(input, i) {
            input.setAttribute('id', DATE_TO_ID + i);
            input.setAttribute('name', DATE_TO_ID + i);
          });

          var labelsDateFrom = document.querySelectorAll('.cb-daterangepicker__dateFrom-label')
          var labelsDateTo = document.querySelectorAll('.cb-daterangepicker__dateTo-label')

          labelsDateFrom.forEach(function(label, i) {
            label.setAttribute('for', DATE_FROM_ID + i);
          });
          labelsDateTo.forEach(function(label, i) {
            label.setAttribute('for', DATE_TO_ID + i);
          });

          var inputsDateFrom = document.querySelectorAll('.cb-daterangepicker__dateFrom-input')
          var inputsDateTo = document.querySelectorAll('.cb-daterangepicker__dateTo-input')

          inputsDateFrom.forEach(function(input, i) {
            _initializeDatepicker(i);
          });

          inputsDateTo.forEach(function(input, i) {
            _initializeDatepicker(i);
          });

          function _initializeDatepicker(i) {
            var $dateFrom = $('#' + DATE_FROM_ID + i),
              $dateTo = $('#' + DATE_TO_ID + i),
              dateFromFormat = scope.dateFromFormat,
              dateToFormat = scope.dateToFormat;

            /**
             * 
             * @function datepicker()
             * Set input into a datepicker
             * @param {format} type must be an object
             * 
             */
            $dateFrom.datepicker(dateFromFormat)
            $dateTo.datepicker(dateToFormat);
            /**
             * 
             * @function {changeDate} callback
             * 
             * @var {minDate} get selected date value of {dateFrom}
             * @var {fromDate} Returns a localized date object representing the internal date object of {dateFrom}
             * @var {toDate} Returns a localized date object representing the internal date object of {dateTo}
             * 
             * Triggers when dateFrom was changed
             * 
             */
            $dateFrom.datepicker()
              .on('changeDate', function(selected) {
                var minDate = new Date(selected.date.valueOf());
                var fromDate = $dateFrom.datepicker('getDate');
                var toDate = $dateTo.datepicker('getDate');

                $dateTo.datepicker('setStartDate', minDate);
                if (fromDate > toDate) {
                  $dateTo.datepicker('setDate', minDate);
                }

                scope.$digest;

              });
          }

        }
      }


    }

  }
})();


// make datepicker for dateFrom  datepicker for dateTo
// 
// if dateFrom change set Min Date of DateTo
// get date of dateFrom
// finally set the min date of DateTo