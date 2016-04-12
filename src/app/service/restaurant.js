'use strict';

angular.module('guruguru.RestaurantService', [])
    .factory('RestaurantService', function($q, $http, RESTAURANT_SERVICE_URL) {
        return {
            getRestaurant: function() {
                var defer = $q.defer();

                $http.get(RESTAURANT_SERVICE_URL + '/api/restaurant')
                    .success(function(res) {
                        var restaurant = res.restaurants.map(function(item) {
                            var imageUrl = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=200';
                            if (item.images.length > 0) {
                                var imageIndex = Math.floor(Math.random() * item.images.length);
                                var imageSrc = item.images[imageIndex].url;
                                imageUrl = imageSrc + '=s350';
                            }

                            return {
                                name: item.name,
                                description: item.description,
                                image: imageUrl,
                                location: {
                                    lat: item.location.coordinates[1],
                                    lng: item.location.coordinates[0],
                                }
                            }
                        });

                        defer.resolve(restaurant);
                    })
                    .error(function(status) {
                        defer.reject(status);
                    });

                return defer.promise;
            }
        }
    })
