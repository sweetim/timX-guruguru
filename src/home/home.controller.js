'use strict';

export default class HomeCtrl {
    constructor($state) {
        this.title = 'he';
        this.$state = $state;
        
        this.$state.go('home.restaurant', {});
    }
}
