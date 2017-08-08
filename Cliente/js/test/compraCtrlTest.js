
describe("Testando o  AngularJs",function(){
  let indisponivelPath = "images/cadeiraIndisponivel.jpg";
  let selecionadaPath = "images/cadeiraSelecionada.jpg";
  let disponivelPath = "images/cadeiraDisponivel.jpg";

  beforeEach(module("cines"));

  describe("Testando o AngularJS compraCtrl",function(){
    var scope,ctrl;

    beforeEach(inject(function($controller,$rootScope){
      scope = $rootScope.$new();//NOPMD
      ctrl = $controller("compraCtrl", {$scope:scope});
    }));

    it("Deve inicializar os atributos no scope",function(){
      expect(scope.dataAtual).toBeDefined();
      expect(scope.dataSelecionada).toBeDefined();
      expect(scope.fimDeCartaz).toBeDefined();
      expect(scope.cadeiraIndisponivelPath).toBeDefined();
      expect(scope.cadeiraIndisponivelPath).toBe(indisponivelPath);
      expect(scope.cadeiraSelecionadaPath).toBeDefined();
      expect(scope.cadeiraSelecionadaPath).toBe(selecionadaPath);
      expect(scope.cadeiraDisponivelPath).toBeDefined();
      expect(scope.cadeiraDisponivelPath).toBe(disponivelPath);

    });

    it("Metodo getCorDeCadeira deve retornar cadeiraSelecionadaPath", function(){
      let cadeira = {disponivel: true,selecionada: true };
      let cadeiras = [];
      expect(scope.getCorDeCadeira(cadeira)).toBe(selecionadaPath);
    });

    it("Metodo getCorDeCadeira deve retornar cadeiraDisponivelPath", function(){
      let cadeira = {disponivel: true,selecionada: false };
      let cadeiras = [];
      expect(scope.getCorDeCadeira(cadeira)).toBe(disponivelPath);
    });

    it("Metodo getCorDeCadeira deve retornar cadeiraIndisponivelPath", function(){
      let cadeira = {disponivel: false,selecionada: false };
      let cadeiras = [];
      expect(scope.getCorDeCadeira(cadeira)).toBe(indisponivelPath);
    });
  });
});
