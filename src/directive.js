'use strict';

import angular from 'angular';
import NavBarDirective from './directive/navbar';

export default angular.module('gg.directive', [])
    .directive('ggNavbar', () => new NavBarDirective())
    .name;
