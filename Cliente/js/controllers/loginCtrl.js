angular.module("cines")

.controller("loginCtrl", ['$scope','$rootScope', '$state','RestService', function($scope,$rootScope, $state,RestService) {

  $scope.logar = function (usuario) {
    RestService.add("http://localhost:8080/api/authenticate/", usuario, function(response){
      $rootScope.usuarioLogado = response.data.usuario;
      $state.go('home');
    });
  }

  $scope.showScope = function () {
    console.log($rootScope);
  }

}]);
