export class UserInfoModalController {
    constructor(
        $scope, $mdDialog, userId, APIService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;

        this.APIService = APIService;

        (this.init)(userId);
    }

    init(id) {
        this.getUserData();
    }

    getUserData() {
        
    }

    close() {
        this.$mdDialog.cancel();
    }
}
