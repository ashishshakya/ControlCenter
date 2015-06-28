((): void => {
    'use strict';

    var app = angular.module('app');

    app.config(configureToolTip);
    configureToolTip.$inject = ['$tooltipProvider'];

    function configureToolTip($tooltipProvider: angular.ui.bootstrap.ITooltipProvider) {
        $tooltipProvider.setTriggers('mouseenter');
        $tooltipProvider.options({
            animation: true,
            placement: 'bottom',
            popupDelay: 200
        });
    }
})(); 