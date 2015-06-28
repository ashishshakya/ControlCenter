module app.layout {
    'use strict';

    class ControlCenterDirective implements ng.IDirective {
        static tagName: string = 'controlCenter';

        static instance(): ng.IDirective {
            return new ControlCenterDirective();
        }

        restrict = 'AE';
        templateUrl = '../app/layout/controlCenter/controlCenter.html';

        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

        }

    }

    angular
        .module('app.layout')
        .directive(ControlCenterDirective.tagName, ControlCenterDirective.instance);

}