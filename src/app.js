'use strict';

angular.module('guruguru', [
    'ngMaterial',
    'ui.router',
    'guruguru.RestaurantCtrl',
    'guruguru.HomeCtrl'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/restaurant/restaurant.html',
            controller: 'RestaurantCtrl'
        });
}).constant('RESTAURANT_SERVICE_URL', 'http://localhost:3000');
