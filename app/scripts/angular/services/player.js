angular.module('app.services').factory('Player', [
  '$http',

  function($http) {
    players = [];

    return {
      all: function() {
        if (players.length) return players;

        return $http.get('/data/players.json');
      }
    };
  }
]);