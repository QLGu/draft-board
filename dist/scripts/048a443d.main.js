angular.module("app",["app.controllers","app.services"]),angular.module("app.controllers",[]),angular.module("app.controllers").controller("mainCtrl",["$scope","Player","Team",function(a,b,c){a.rounds=[1,2,3,4,5,6,7],a.currentRound=1,a.positions=["QB","RB","FB","WR","TE","OT","OG","C","DE","DT","ILB","OLB","CB","FS","SS"],a.picksMade=0,a.allPlayers=[],c.all().success(function(b){a.teams=b,a.currentTeam=a.teams[0].name,a.summaryTeam=a.teams[0].name}),b.all().success(function(b){a.players=b,a.allPlayers=b}),a.filterPosition=function(b){a.players=a.allPlayers.filter(function(a){return a.pos==b})},a.draftPlayer=function(b){for(var c,d=0,e=a.teams.length;e>d;d++)if("undefined"==typeof a.teams[d].rounds||-1===a.teams[d].rounds.indexOf(a.currentRound)){a.currentTeam=a.teams[d],"undefined"==typeof a.teams[d].rounds?a.teams[d].rounds=[a.currentRound]:a.teams[d].rounds.push(a.currentRound);break}for(var d=0,e=a.allPlayers.length;e>d;d++)a.allPlayers[d].rank==b&&(c=d);a.allPlayers[c].team=a.currentTeam.name,a.allPlayers[c].round=a.currentRound,a.picksMade++,a.allPlayers[c].pick=a.picksMade,a.picksMade%a.teams.length===0&&a.currentRound++},a.madePick=function(b){return"undefined"!=typeof b.rounds&&-1!==b.rounds.indexOf(a.currentRound)},a.summaryByTeam=function(){return a.allPlayers.filter(function(b){return b.team==a.summaryTeam})}}]),angular.module("app.services",[]),angular.module("app.services").factory("Player",["$http",function(a){return players=[],{all:function(){return players.length?players:a.get("/data/players.json")}}}]),angular.module("app.services").factory("Team",["$http",function(a){return teams=[],{all:function(){return a.get("/data/teams.json")}}}]);