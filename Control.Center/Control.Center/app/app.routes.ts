((): void => {
    'use strict';

    var app = angular.module('app');

    app.config(routeConfig);

    routeConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function routeConfig(
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $stateProvider.state('login', {
            url: '/',
            views: {
                'master': {
                    controller: 'app.login.controller',
                    templateUrl: '../app/login/login.html'
                }
            }
        });

    }
})();