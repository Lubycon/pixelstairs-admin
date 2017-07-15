(function() {
    'use strict';

    angular
        .module('components')
        .controller('DeliveryPriceModalController', [
            '$scope', '$mdDialog', 'data', 'Restangular',
            '$state',
            DeliveryPriceModalController
        ]);

    /** @ngInject */
    function DeliveryPriceModalController(
        $scope, $mdDialog, data, $state
    ) {

        $scope.init = (init)();
        function init() {
            $scope.data = data.dummy;
        }


        // CONTROLLER OUTPUT ------>
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
})();
