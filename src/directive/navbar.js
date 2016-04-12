'use strict';

export default class NavBarDirective {
    constructor() {
        this.restrict = 'E';
        this.scope = {
            current: '='
        };
        this.template = require('./navbar.html');
        this.replace = true;
        this.link = (scope, element, attrs) => {

        };
    }
}
