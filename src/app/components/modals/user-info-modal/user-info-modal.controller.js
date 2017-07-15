export class UserInfoModalController {
    constructor(
        $scope, $mdDialog, userId, moment,
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
            this.data.createdAt.date = moment(this.data.createdAt.date).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.data.updatedAt.date = moment(this.data.updatedAt.date).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.data.lastLoginTime = moment(this.data.lastLoginTime).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.userProfile = this.ImageService.getUserProfile(this.data.profileImg);
        }, err => {
            alert(`${id}번 유저 데이터를 불러오는 데 실패했습니다. 서버 관리자에게 문의하세요`);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }
}
