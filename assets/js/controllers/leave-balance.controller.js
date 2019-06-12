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

  }
  
  })();