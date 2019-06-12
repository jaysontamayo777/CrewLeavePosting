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

    console.log('THIS IS DETAILED CONTROLLER')

    angular.element(document).ready(function () {
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
    });

    // angular.element(document.querySelector('#dateFrom')).datepicker({
    //   changeMonth: true,
    //   changeYear: true,
    //   dateFormat: 'yy/mm/dd'
    //   // showOn: "button",
    //   // buttonImage: "images/calendar.gif",
    //   // buttonImageOnly: true,
    //   // buttonText: "Select date"
    // });
  
    // angular.element(document.querySelector('#dateToday')).datepicker({
    //   changeMonth: true,
    //   changeYear: true,
    //   dateFormat: 'yy/mm/dd'
    //   // showOn: "button",
    //   // buttonImage: "images/calendar.gif",
    //   // buttonImageOnly: true,
    //   // buttonText: "Select date"
    // });
  }
  
  })();