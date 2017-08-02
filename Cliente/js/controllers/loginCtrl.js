angular.module("cines")

.controller("loginCtrl", ['$scope','$rootScope', '$state','RestService', function($scope,$rootScope, $state,RestService) {

  $scope.logar = function (usuario) {
    RestService.add("http://localhost:8080/api/authenticate/", usuario, function(response){
      $rootScope.usuarioLogado = response.data.usuario;
      if(response.data.usuario)
      	$state.go('home');
      else
      	mostrarToast("Email ou senha inválido. Tente novamente.");
    });
  }

	function mostrarToast(frase){
		$mdToast.show(
	  		$mdToast.simple()
	    		.textContent(frase)
	    		.position('bottom right')
	    		.hideDelay(3000)
		);
	};

}]);
