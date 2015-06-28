module app.main {
    'use strict';

    interface IMainController {
    }

    class MainController implements IMainController {

    }

    angular
        .module('app.login')
        .controller('app.main.controller', MainController);
}