'use strict';

angular.module('guruguru.RestaurantCtrl', [
        'guruguru.RestaurantService'
    ])
    .controller('RestaurantCtrl', function($scope, RestaurantService) {
        RestaurantService.getRestaurant().then(function(data) {
            $scope.restaurant = data;
            console.log(data)
        }).catch(function(err) {
            console.log(err);
        });
    });
