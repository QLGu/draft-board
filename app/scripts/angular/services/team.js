angular.module('app.services').factory('Team', [
  function() {
    teams = [];

    return {
      all: function() {
        var res;

        if (teams.length) {
          res = teams;
        } else {
          res = [
            {
              name: 'Houston Texans',
              abbr: 'HOU',
              order: 1
            },
            {
              name: 'St. Louis Rams',
              abbr: 'STL',
              order: 2,
            },
            {
              name: 'Jacksonville Jaguars',
              abbr: 'JAX',
              order: 3
            },
            {
              name: 'Cleveland Browns',
              abbr: 'CLE',
              order: 4
            },
            {
              name: 'Oakland Raiders',
              abbr: 'OAK',
              order: 5
            }
          ];
        }

        return res;
      }
    };
  }
]);