/**
 * @module CrewLeavePostingApp this is the main app module.
 * @controller DetailedController
 * Use this to control and initialize data only.
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .controller('DetailedController', DetailedController);

  DetailedController.$inject = ['$scope'];

  function DetailedController($scope) {
    var vm = this;

    init();

    function init() {
      loadDatePicker();
    }

    function loadDatePicker() {
      angular.element(document).ready(function() {
        // Leave Date
        $('#leaveDateFrom').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
        }).on('changeDate', function(selected) {
          var minDate = new Date(selected.date.valueOf());
          var fromDate = $('#leaveDateFrom').datepicker('getDate');
          var toDate = $('#leaveDateTo').datepicker('getDate');

          $('#leaveDateTo').datepicker('setStartDate', minDate);
          if (fromDate > toDate) {
            $('#leaveDateTo').datepicker('setDate', minDate);
          }
        });

        $('#leaveDateTo').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
        });

        // Posted Date
        $('#postedDateFrom').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
        }).on('changeDate', function(selected) {
          var minDate = new Date(selected.date.valueOf());
          var fromDate = $('#postedDateFrom').datepicker('getDate');
          var toDate = $('#postedDateTo').datepicker('getDate');

          $('#postedDateTo').datepicker('setStartDate', minDate);
          if (fromDate > toDate) {
            $('#postedDateTo').datepicker('setDate', minDate);
          }
        });

        $('#postedDateTo').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
        });
      });
    }

    vm.loadTable = function() {
      angular.element(document).ready(function() {
        // Data Table
        $('#example').DataTable({
          rowReorder: {
            selector: 'td:nth-child(2)'
          },
          responsive: true
        });
      });
    };
  }

})();