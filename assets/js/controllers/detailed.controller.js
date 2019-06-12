/**
 * JourneyReportApp this is the main app module.
 * DetailedController@ controller for journey report.
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

    console.log('THIS IS DETAILED CONTROLLER')
    
    $('#leaveDateFrom').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
    }).on('changeDate', function (selected) {
      var minDate = new Date(selected.date.valueOf());
      var fromDate = $("#leaveDateFrom").datepicker('getDate');
      var toDate = $('#leaveDateTo').datepicker('getDate');

      $('#leaveDateTo').datepicker('setStartDate', minDate); 
      if (fromDate > toDate){
          $('#leaveDateTo').datepicker('setDate', minDate);  
      }    
    });

    $('#leaveDateTo').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true,
    });


    $('#postedDateFrom').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
    }).on('changeDate', function (selected) {
      var minDate = new Date(selected.date.valueOf());
      var fromDate = $('#postedDateFrom').datepicker('getDate');
      var toDate = $('#postedDateTo').datepicker('getDate');

      $('#postedDateTo').datepicker('setStartDate', minDate); 
      if (fromDate > toDate){
          $('#postedDateTo').datepicker('setDate', minDate);  
      }    
    });

    $('#postedDateTo').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true,
    });
  }
  
  })();