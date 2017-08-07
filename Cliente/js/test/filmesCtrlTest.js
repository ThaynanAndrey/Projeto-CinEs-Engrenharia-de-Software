describe("Testando o  AngularJs",function(){
  beforeEach(module("cines"));

  describe("Testando o AngularJS filmesCtrl",function(){
    let scope,ctrl,rootScope;

    let filtro= 12;

    beforeEach(inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      rootScope = $rootScope;
      ctrl = $controller("filmesCtrl", {$scope:scope, $rootScope:rootScope});
    }));

    it("Deve inicializar os atributos no scope",function(){
      expect(scope.tiposDeFiltragem).toBeDefined();

      expect(scope.tiposDeFiltragem).toEqual({genero:"Genero",
    							classificacao:"Classificacao",
    							nome: "Nome"});

      expect(scope.tiposDeGenero).toBeDefined();
      expect(scope.tiposDeGenero).toEqual(["Ação","Aventura","Comédia","Drama",
    							"Fantasia","Romance","Suspense","Terror"]);

      expect(scope.tiposDeClassificacoes).toBeDefined();
      expect(scope.tiposDeClassificacoes).toEqual([0,10,12,14,16,18]);

      expect(scope.filtros).toBeDefined();
      expect(scope.filtros).toEqual([]);

      expect(scope.tipoDeFiltragem).toBeDefined();
      expect(scope.tipoDeFiltragem).toEqual(scope.tiposDeFiltragem.nome);
    });

    it("metodo adcFiltro deve adicionar filtro a lista de filtros",function(){
      scope.filtro = filtro;
      scope.adcFiltro();
      expect([12]).toEqual(scope.filtros);
    });

    it("metodo removerFiltro deve remover filtro a lista de filtros",function(){
      scope.filtro = filtro;
      scope.adcFiltro();
      expect([12]).toEqual(scope.filtros);
      scope.removerFiltro(filtro);
      expect([]).toEqual(scope.filtros);
    });

    it("mostrarFilme deve retornar false caso o search não seja substring do filme",function(){
      filme = {nome: "MULHER MARAVILHA"};
      scope.searched = "HOMEM";
      expect(false).toEqual(scope.mostrarFilme(filme));
    });

    it("mostrarFilme deve retornar true caso o search não seja substring do filme",function(){
      filme = {nome: "MULHER MARAVILHA"};
      scope.searched = "MULHER";
      expect(true).toEqual(scope.mostrarFilme(filme));
    });
    it("mostrarFilme deve retornar true caso a classificacao seja valida",function(){
      filme = {nome: "MULHER MARAVILHA"};
      scope.filtros = [5]
      expect(false).toEqual(scope.mostrarFilme(filme));
    });


    it("selecionarFilme deve setar o filme selecionado",function(){
      filme = {nome: "MULHER MARAVILHA"};
      scope.selecionarFilme(filme);
      expect(rootScope.filmeSelecionado).toBe(filme);
    });
    it("limparFiltragemPorNome deve limpar a filtragem",function(){
      scope.searched = "Alguma coisa";
      scope.limparFiltragemPorNome();
      expect(scope.searched).toBe("");
    });
    it("mostrarClassificacao deve retornar Livre caso seja 0 ou a propria classificacao",function(){
      var classificacao = 0;
      expect(scope.mostrarClassificacao(classificacao)).toBe("Livre");
      classificacao =1;
      expect(scope.mostrarClassificacao(classificacao)).toBe(classificacao);
    });



  });
});
