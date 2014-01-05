angular.module('app.services').factory('Team', [
  '$http',

  function($http) {
    teams = [];

    return {
      all: function() {
        return $http.get('/data/teams.json');
      }
    };
  }
]);