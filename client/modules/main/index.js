angular.module('appMain', ['HomePage','mainServices'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: "/home",
                controller:'homeCtrl',
                templateUrl: "modules/main/template/main.html"
            })
    });
