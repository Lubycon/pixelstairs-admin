export class UserInfoModalController {
    constructor(
        $scope, $mdDialog, userId,
        APIService, ImageService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;

        this.APIService = APIService;
        this.ImageService = ImageService;

        (this.init)(userId);
    }

    init(id) {
        this.getUserData(id);
    }

    getUserData(id) {
        this.APIService.resource('members.detail', {
            id
        }).get().then(res => {
            this.data = res.result;
            this.userProfile = this.ImageService.getUserProfile(this.data.profileImg);
        }, err => {
            alert(`${id}번 유저 데이터를 불러오는 데 실패했습니다. 서버 관리자에게 문의하세요`);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }
}
