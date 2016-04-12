'use strict';

import 'angular-material/angular-material.css'

import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import controllerModule from './controller';
import directiveModule from './directive';


angular.module('gg', [
    angularMaterial,
    uiRouter,
    controllerModule,
    directiveModule
]).config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home/home.html'),
            controller: 'gg.HomeCtrl',
            controllerAs: 'gg'
        })
        .state('home.restaurant', {
            url: '',
            template: require('./restaurant/restaurant.html'),
            controller: 'gg.RestaurantCtrl',
            controllerAs: 'gg'
        })
        .state('home.id', {
            url: ':id',
            template: require('./restaurant/restaurant.id.html'),
            controller: 'gg.RestaurantIDCtrl',
            controllerAs: 'gg'
        })


    $locationProvider.html5Mode(true);
}).constant('RESTAURANT_SERVICE_URL', 'http://localhost:3000');
