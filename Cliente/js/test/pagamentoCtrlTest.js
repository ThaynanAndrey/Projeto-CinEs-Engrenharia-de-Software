describe("Testando o  AngularJs",function(){
  beforeEach(module("cines"));

  describe("Testando o AngularJS pagamentoCtrl",function(){
    let scope,ctrl;


    beforeEach(inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      ctrl = $controller("pagamentoCtrl", {$scope:scope});
    }));

    it("Deve inicializar os atributos no scope",function(){
      expect(scope.user).toBeDefined();
      expect(scope.user).toEqual({ entradaMeia: 0, entradaInteira: 0, numeroCartao: '', codigoDeSeguranca: '', validadeCartao: '' });



      expect(scope.qrCode).toBeDefined();
      expect(scope.qrCode).toBe("../../images/qrcode.40772041.png");


    });

    it("Preco do ingresso deve ser calculado de forma correta",function(){
      expect(scope.precoIngresso()).toBe(0);

    });

  });
});
