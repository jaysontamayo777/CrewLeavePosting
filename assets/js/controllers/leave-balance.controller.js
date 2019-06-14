/**
 * @module CrewLeavePostingApp this is the main app module.
 * @controller DetailedController
 * Use this to control and initialize data only.
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .controller('LeaveBalancesController', LeaveBalancesController);

  LeaveBalancesController.$inject = ['$scope'];

  function LeaveBalancesController($scope) {
    var vm = this;

    init();

    function init() {

    }
  }

})();