angular.module('app.controllers', []);

angular.module('app.controllers').controller('mainCtrl', [
  '$scope',
  'Player',
  'Team',

  function($scope, Player, Team) {
    $scope.rounds = [1, 2, 3, 4, 5, 6, 7];
    $scope.positions = ['QB', 'RB', 'FB', 'WR', 'TE', 'OT', 'OG', 'C', 'DE', 'DT', 'ILB', 'OLB', 'CB', 'FS', 'SS'];
    $scope.teams = Team.all();

    Player.all().success(function(data) {
      $scope.players = data;
      $scope.allPlayers = data;
    });

    $scope.filterPosition = function(pos) {
      $scope.players = $scope.allPlayers.filter(function(el) {
        return el.pos == pos;
      });
    };
  }
]);