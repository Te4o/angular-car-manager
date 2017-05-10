(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run)
        .directive("backButton", ["$window", function ($window) {
            return {
                restrict: "A",
                link: function (scope, elem, attrs) {
                    elem.bind("click", function () {
                        $window.history.back();
                    });
                }
            };
        }])

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .when('/showitems', {
                controller: 'ShowItems',
                templateUrl: 'showitems/showitems.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/home' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        $rootScope.globals = $cookies.getObject('globals') || {};
    }

})();