module app.main {
    'use strict';

    var app = angular.module('app.main');

    app.config(routeConfig);

    routeConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function routeConfig(
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $stateProvider.state('main', {
            url: '/main',
            views: {
                'master': {
                    controller: 'app.main.controller',
                    templateUrl: '../app/main/main.html'
                },
                'controlCenter@main': {
                    template: '<control-center></control-center>'
                    
                },
                'appBody@main': {
                    template: 'This is the pap body'
                }
            }
        });

    }
}