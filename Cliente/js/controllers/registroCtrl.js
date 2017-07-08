angular.module("cines")

.controller("RegistroCtrl", ['$scope', function($scope) {

  $scope.registro = {
    nome: "Nome"
  };

  $scope.nada = function(){
    console.log($scope.registro.nome);
  }

}]);