'use strict';

import angular from 'angular';

import HomeCtrl from './home/home.controller';
import RestaurantCtrl from './restaurant/restaurant.controller';
import RestaurantIDCtrl from './restaurant/restaurant.id.controller';

import Service from './service';

const moduleName = 'gg.controllers';

angular.module(moduleName, [
        Service
    ])
    .controller('gg.HomeCtrl', HomeCtrl)
    .controller('gg.RestaurantCtrl', RestaurantCtrl)
    .controller('gg.RestaurantIDCtrl', RestaurantIDCtrl)

export default moduleName;
