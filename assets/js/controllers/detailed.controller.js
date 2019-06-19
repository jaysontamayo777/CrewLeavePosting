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

    vm.loadTable = loadTable;

    vm.dateFromFormat = {
      format: 'mm/dd/yyyy',
      autoclose: true,
    };

    vm.dateToFormat = {
      format: 'mm/dd/yyyy',
      autoclose: true,
    };

    vm.crew = {}

    vm.refreshData = function(crew) {
      vm.crew = Object.assign({}, crew);
      console.table(vm.crew);
    }

    init();

    function init() {
      loadDatePicker();
    }

    function loadDatePicker() {}

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
    }
  }

})();