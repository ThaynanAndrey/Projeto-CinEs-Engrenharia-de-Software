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
                templateUrl: "views/login.html"
            })

            .state('perfil', {
                url: "/perfil",
                templateUrl: "views/perfil.html"
            })

            .state('filmes', {
                url: "/filmes",
                templateUrl: "views/filmes.html"
            })

            .state('pagamento', {
                url: "/pagamento",
                templateUrl: "views/pagamento.html"
            })

            .state('registro', {
                url: "/registro",
                templateUrl: "views/registro.html"
            });
}]);