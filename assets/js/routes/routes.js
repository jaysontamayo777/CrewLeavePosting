/**
 * @Routes
 */

(function() {
  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    var states = [{
        name: 'detailed',
        url: '/detailed',
        templateUrl: 'views/detailed.html',
        controller: 'DetailedController',
        controllerAs: 'detailed'
      },
      {
        name: 'posting',
        url: '/posting',
        templateUrl: 'views/posting.html',
        controller: 'PostingController',
        controllerAs: 'posting'
      },
      {
        name: 'retract',
        url: '/retract',
        templateUrl: 'views/retract.html',
        controller: 'RetractController',
        controllerAs: 'retract'
      },
      {
        name: 'leaveBalances',
        url: '/leave-balances',
        templateUrl: 'views/leave-balances.html',
        controller: 'LeaveBalancesController',
        controllerAs: 'lvbalance'
      },
      {
        name: 'masterData',
        url: '/master-data',
        templateUrl: 'views/master-data.html',
        controller: 'MasterDataController',
        controllerAs: 'masterdata'
      },
    ]

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/detailed');
  }
})();