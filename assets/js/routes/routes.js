
/**
 * Routes
 */

(function() {
  'use strict';

  angular
      .module('CrewLeavePostingApp')
      .config(config);

  function config($stateProvider, $urlRouterProvider) {
    var states = [
      { 
        name: 'detailed', 
        url: '/detailed', 
        templateUrl: 'views/detailed.html',
        controller: 'DetailedController',
        controllerAs: 'detail'
      },
      { 
        name: 'posting', 
        url: '/posting', 
        templateUrl: 'views/posting.html'
      },
      { 
        name: 'retract', 
        url: '/retract', 
        templateUrl: 'views/retract.html'
      },
      { 
        name: 'leaveBalances', 
        url: '/leave-balances', 
        templateUrl: 'views/leave-balances.html'
      },
      { 
        name: 'masterData', 
        url: '/master-data', 
        templateUrl: 'views/master-data.html'
      },
    ]

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/detailed');
  }
})();