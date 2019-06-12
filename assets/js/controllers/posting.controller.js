/**
 * @module CrewLeavePostingApp this is the main app module.
 * @controller PostingController
 * Use this to control and initialize data only.
 */

(function() {

  'use strict';
  
  angular
      .module('CrewLeavePostingApp')
      .controller('PostingController', PostingController);
  
      PostingController.$inject = ['$scope'];
  
  function PostingController($scope) {
    var vm = this;

  }
  
  })();