angular.module("cines")

.controller("loginCtrl", ['$scope','$rootScope', '$state','RestService', '$mdToast', function($scope,$rootScope, $state,RestService,$mdToast) {

  $scope.logar = function (usuario) {
    RestService.add("http://localhost:8080/api/authenticate/", usuario, function(response){
      if(response.data.success === true){
        $rootScope.usuarioLogado = response.data.usuario;
        $state.go('home');
      } else {
        mostrarToast("Dados inválidos")
      }
    });
  }

  $scope.showScope = function () {
    console.log($rootScope);
  };

  function mostrarToast(frase){
		$mdToast.show(
      		$mdToast.simple()
        		.textContent(frase)
        		.position('bottom right')
        		.hideDelay(3000)
    	);
	};

}]);
