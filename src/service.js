'use strict';

import angular from 'angular';

import RestaurantService from './service/restaurant'

export default angular.module('gg.service', [])
    .service('RestaurantService', RestaurantService)
    .name;
