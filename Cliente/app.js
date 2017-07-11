angular.module("cines", ['ui.router', 'ngMaterial', 'ngMessages','jkAngularCarousel'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider

            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: "homeCtrl"
            })

            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "loginCtrl"
            })

            .state('perfil', {
                url: "/perfil",
                templateUrl: "views/perfil.html",
                controller: "perfilCtrl"
            })

            .state('filmes', {
                url: "/filmes",
                templateUrl: "views/filmes.html",
                controller: "filmesCtrl"
            })

            .state('pagamento', {
                url: "/pagamento",
                templateUrl: "views/pagamento.html",
                controller: "pagamentoCtrl"
            })

            .state('compraRealizada', {
                url: "/compraRealizada",
                templateUrl: "views/compraRealizada.html",
                controller: "pagamentoCtrl"
            })

            .state('registro', {
                url: "/registro",
                templateUrl: "views/registro.html",
                controller: "registroCtrl"
            })

            .state('compra', {
                url: "/compra",
                templateUrl: "views/compra.html",
                controller: "compraCtrl"
            });
}]);
