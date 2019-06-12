
/**
 * Routes
 */

(function() {
  'use strict';

  angular
    .module('CrewLeavePostingApp')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'detailsPage',
        config: {
          abstract: true,
          template: '<div><h1>HELLO WORLD</h1></div>',
          url: '/person-details'
        }
      }
    ];
  }

})();
