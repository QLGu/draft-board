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
            },
            { name: 'Atlanta Falcons', abbr: 'ATL', order: 6 },
            { name: 'Tampa Bay Buccaneers', abbr: 'TB', order: 7 },
            { name: 'Minnesota Vikinks', abbr: 'MIN', order: 8 },
            { name: 'Buffalo Bills', abbr: 'BUF', order: 9 },
            { name: 'Detroit Lions', abbr: 'DET', order: 10 },
            { name: 'Tennessee Titans', abbr: 'TEN', order: 11 },
            { name: 'New York Giants', abbr: 'NYG', order: 12 },
            { name: 'St. Louis Rams', abbr: 'STL', order: 13 },
            { name: 'Chicago Bears', abbr: 'CHI', order: 14 },
            { name: 'Pittsburgh Steelers', abbr: 'PIT', order: 15 },
            { name: 'Baltimore Ravens', abbr: 'BAL', order: 16 },
            { name: 'Dallas Cowboys', abbr: 'DAL', order: 17 },
            { name: 'New York Jets', abbr: 'NYJ', order: 18 },
            { name: 'Miami Dolphins', abbr: 'MIA', order: 19 },
            { name: 'Arizona Cardinals', abbr: 'ARI', order: 20 }
          ];
        }

        return res;
      }
    };
  }
]);