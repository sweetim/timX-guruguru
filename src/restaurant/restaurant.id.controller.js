'use strict';

export default class RestaurantIDCtrl {
    constructor($stateParams, RestaurantService) {
        this.$stateParams = $stateParams;
        this.service = RestaurantService;

        const id = this.$stateParams.id;

        this.service.getRestaurant(id).then((res) => {
            this.name = res.name;
            this.description = res.description;
            this.coordinates = `${res.location.coordinates[1]}.${res.location.coordinates[0]}`,
            this.images = res.images;
        }).catch((err) => {
            console.log(err);
        });
    }
}
