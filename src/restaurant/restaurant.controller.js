'use strict';

export default class RestaurantCtrl {
    constructor(RestaurantService) {
        this.service = RestaurantService;
        this.restaurant = [];

        this.service.getRestaurant().then((res) => {
            this.restaurant = res;
        }).catch((err) => {
            console.log(err);
        });
    }
}
