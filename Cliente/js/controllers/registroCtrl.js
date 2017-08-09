angular.module("cines")

.controller("registroCtrl", ['$scope', '$mdDialog', '$mdToast', '$state', 'RestService', function($scope, $mdDialog, $mdToast, $state, RestService) {

  $scope.registro = {
    nome: "",
    email: "",
    senha: "",
    repetirSenha: "",
    cpf: ""
  };

  $scope.registrar = function(registro){
    var novoUsuario = {}
    var usuarioValido = true;
    novoUsuario.nome = registro.nome,
    novoUsuario.email = registro.email,
    novoUsuario.senha = registro.senha,
    novoUsuario.cpf = registro.cpf

    RestService.find('http://localhost:8080/api/usuario', function(response) {
      response.data.forEach(function(usuario){
        if(novoUsuario.email == usuario.email || novoUsuario.cpf == usuario.cpf){
          usuarioValido = false;
        }
      });
      if(usuarioValido){
        RestService.add("http://localhost:8080/api/usuario/",novoUsuario);
        mostrarToast("Usuário cadastrado com sucesso!");
        $state.go('login');
      }
      else{
        mostrarToast("Insira um CPF e Email que nunca foram cadastrados.");
      }
    });


  }

   $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Termos de uso')
        .textContent('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.')
        .ariaLabel('Termos de uso')
        .ok('Ok')
        .targetEvent(ev)
    );
  };

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
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
