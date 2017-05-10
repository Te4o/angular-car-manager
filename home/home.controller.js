(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function HomeController($location, AuthenticationService, FlashService) {

    }

})();
