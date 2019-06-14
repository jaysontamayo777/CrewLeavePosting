/**
 * @module CrewLeavePostingApp this is the main app module.
 * @controller MasterDataController
 * Use this to control and initialize data only.
 */

(function() {

  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .controller('MasterDataController', MasterDataController);

  MasterDataController.$inject = ['$scope'];

  function MasterDataController($scope) {
    var vm = this;

    init();

    function init() {

    }
  }

})();