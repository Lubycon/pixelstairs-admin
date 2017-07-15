export class UserInfoModalController {
    constructor(
        $scope, $mdDialog, data, Restangular
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;
    }

    close() {
        this.$mdDialog.cancel();
    }
}
