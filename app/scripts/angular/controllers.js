angular.module('app.controllers', []);

angular.module('app.controllers').controller('mainCtrl', [
  '$scope',
  'Player',
  'Team',

  function($scope, Player, Team) {
    $scope.rounds = [1, 2, 3, 4, 5, 6, 7];
    $scope.positions = ['QB', 'RB', 'FB', 'WR', 'TE', 'OT', 'OG', 'C', 'DE', 'DT', 'ILB', 'MLB', 'CB', 'FS', 'SS'];
    $scope.teams = Team.all();
    $scope.players = Player.all();
  }
]);