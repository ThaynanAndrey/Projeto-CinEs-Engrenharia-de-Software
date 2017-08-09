angular.module("cines")

.controller("loginCtrl", ['$scope','$rootScope', '$state','RestService', '$mdToast', function($scope,$rootScope, $state,RestService,$mdToast) {

  $scope.logar = function (usuario) {
    RestService.add("api/authenticate/", usuario, function(response){
      $rootScope.usuarioLogado = response.data.usuario;
      if(response.data.usuario){
      	$state.go('home');
      }
      else{
      	mostrarToast("Dados inválidos. Tente novamente.");
      }
    });
  }

	function mostrarToast(frase){
		$mdToast.show(
	  		$mdToast.simple()
	    		.textContent(frase)
	    		.position('bottom right')
	    		.hideDelay(3000)
		);
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
