module app.layout {
    'use strict';

    class PageHeaderDirective implements ng.IDirective {
        static tagName: string = 'appHeader';
        static instance(): ng.IDirective {
            return new PageHeaderDirective();
        }

        restrict = 'AE';
        templateUrl = '../app/layout/header/header.html';

        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

        }

    }

    angular
        .module('app.layout')
        .directive(PageHeaderDirective.tagName, PageHeaderDirective.instance);

}