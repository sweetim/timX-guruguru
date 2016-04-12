'use strict';

export default class RestaurantCtrl {
    constructor(RestaurantService, $state) {
        this.service = RestaurantService;
        this.$state = $state;
        this.restaurant = [];

        this.service.getRestaurants().then((res) => {
            this.restaurant = res;
        }).catch((err) => {
            console.log(err);
        });
    }

    selectRestaurant(item) {
        this.$state.go('home.id', {
            id: item.id
        });
    }
}
