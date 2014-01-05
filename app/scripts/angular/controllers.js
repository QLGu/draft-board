angular.module('app.controllers', []);

angular.module('app.controllers').controller('mainCtrl', [
  '$scope',
  'Player',
  'Team',

  function($scope, Player, Team) {
    $scope.rounds = [1, 2, 3, 4, 5, 6, 7];
    $scope.currentRound = 1;
    $scope.positions = ['QB', 'RB', 'FB', 'WR', 'TE', 'OT', 'OG', 'C', 'DE', 'DT', 'ILB', 'OLB', 'CB', 'FS', 'SS'];
    $scope.picksMade = 0;

    Team.all().success(function(data) {
      $scope.teams = data;
      $scope.currentTeam = $scope.teams[0].name;
    });

    Player.all().success(function(data) {
      $scope.players = data;
      $scope.allPlayers = data;
    });

    $scope.filterPosition = function(pos) {
      $scope.players = $scope.allPlayers.filter(function(el) {
        return el.pos == pos;
      });
    };

    $scope.draftPlayer = function(rank) {
      var index

      // Update teams array
      for (var i = 0, max = $scope.teams.length; i < max; i++) {
        if (typeof $scope.teams[i].rounds === 'undefined' || $scope.teams[i].rounds.indexOf($scope.currentRound) === -1) {
          $scope.currentTeam = $scope.teams[i];
          if (typeof $scope.teams[i].rounds == 'undefined') {
            $scope.teams[i].rounds = [$scope.currentRound];
          } else {
            $scope.teams[i].rounds.push($scope.currentRound);
          }
          break;
        }
      }

      // Update players array
      for (var i = 0, max = $scope.allPlayers.length; i < max; i++) {
        if ($scope.allPlayers[i].rank == rank) {
          index = i;
        }
      }

      $scope.allPlayers[index].team = $scope.currentTeam.name;
      $scope.picksMade++;

      if ($scope.picksMade % $scope.teams.length === 0) {
        $scope.currentRound++;
      }
    };
  }
]);