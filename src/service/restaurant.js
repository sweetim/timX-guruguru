'use strict';

export default class RestaurantService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getRestaurants() {
        let defer = this.$q.defer();

        this.$http.get('http://localhost:3000/api/restaurant')
            .success((res) => {
                let restaurant = res.restaurants.map((item) => {
                    let imageUrl = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=200';
                    if (item.images.length > 0) {
                        let imageIndex = Math.floor(Math.random() * item.images.length);
                        let imageSrc = item.images[imageIndex].url;
                        imageUrl = imageSrc + '=s350';
                    }

                    return {
                        id: item._id,
                        name: item.name,
                        description: item.description,
                        image: imageUrl,
                        location: {
                            lat: item.location.coordinates[1],
                            lng: item.location.coordinates[0],
                        }
                    }
                });

                defer.resolve(restaurant)
            })
            .error((status) => {
                defer.reject(status)
            });

        return defer.promise;
    }

    getRestaurant(id) {
        let defer = this.$q.defer();

        this.$http.get('http://localhost:3000/api/restaurant/' + id)
            .success((res) => {
                defer.resolve(res);
            })
            .error((status) => {
                defer.reject(status)
            });

        return defer.promise;
    }
}
