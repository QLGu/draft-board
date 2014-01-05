angular.module('app.services').factory('Player', [
  function() {
    players = [];

    return {
      all: function() {
        var res;

        if (players.length) {
          res = players;
        } else {
          res = [
            {
              name: 'Joe Johnson',
              position: 'QB'
            }
          ];
        }

        return res;
      }
    };
  }
]);