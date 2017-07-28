angular.module("cines")

.controller("loginCtrl", ['$scope','$rootScope','RestService', function($scope,$rootScope, RestService) {

  $scope.logar = function () {
    $rootScope.usuarioLogado = {};
  }

  $scope.showScope = function () {
    console.log($rootScope);
  }

}]);
