module app.login {
    'use strict';

    interface ILogInController {
    }

    class LoginController implements ILogInController {

    }

    angular
        .module('app.login')
        .controller('app.login.controller', LoginController);
}