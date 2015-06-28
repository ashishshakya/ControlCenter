module app {
    'use strict';

    export interface IAppController { }

    class AppController implements IAppController {

        static $inject = ['$state'];
        constructor(private $state: angular.ui.IStateService) {
            $state.go('login');
        }
    }

    angular.module('app')
        .controller('app.controller', AppController);
}