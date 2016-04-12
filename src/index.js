'use strict';

import 'angular-material/angular-material.css'

import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import controllerModule from './controller'

angular.module('gg', [
    angularMaterial,
    uiRouter,
    controllerModule
]).config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./restaurant/restaurant.html'),
            controller: 'gg.RestaurantCtrl',
            controllerAs: 'gg'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}).constant('RESTAURANT_SERVICE_URL', 'http://localhost:3000');
