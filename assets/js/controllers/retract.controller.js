/**
 * @module CrewLeavePostingApp this is the main app module.
 * @controller RetractController
 * Use this to control and initialize data only.
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .controller('RetractController', RetractController);

  RetractController.$inject = ['$scope'];

  function RetractController($scope) {
    var vm = this;

    vm.loadTable = loadTable;

    init();

    function init() {

      loadDatePicker();
    }

    function loadDatePicker() {
      angular.element(document).ready(function() {
        // Leave Date
        $('#dateFrom').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
        }).on('changeDate', function(selected) {
          var minDate = new Date(selected.date.valueOf());
          var fromDate = $('#dateFrom').datepicker('getDate');
          var toDate = $('#dateTo').datepicker('getDate');

          $('#dateTo').datepicker('setStartDate', minDate);
          if (fromDate > toDate) {
            $('#dateTo').datepicker('setDate', minDate);
          }
        });

        $('#dateTo').datepicker({
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

    function loadTable() {
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