'use strict';

var App = angular.module('ratingApp', ['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
//    $urlRouterProvider.otherwise("/app/home");
    $stateProvider
        .state('app', {
            url: "/app",
             abstract: true
        })
}]);

App.controller('appCtrl', function ($scope,$state,$rootScope) {

   console.log('welcome to APP Crtl'+JSON.stringify($rootScope.user));

});