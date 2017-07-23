export class UserInfoModalController {
    constructor(
        $parentScope, $scope, $mdDialog, moment, $mdToast,
        userId, FORM_DATA,
        APIService, ImageService
    ) {
        'ngInject';

        this.$parentScope = $parentScope;

        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
        this.moment = moment;

        this.APIService = APIService;
        this.ImageService = ImageService;

        this.data = null;

        this.isModifyEnable = false;
        this.isDeletedContent = true;

        this.userStatusList = FORM_DATA.userStatus;
        this.userGradeList = FORM_DATA.userGrade;

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
            this.data.createdAt = this.moment(this.data.createdAt).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.data.updatedAt = this.moment(this.data.updatedAt).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.data.lastLoginTime = this.moment(this.data.lastLoginTime).format('YYYY년 MM월 DD일 hh:mm:ss');
            this.userProfile = this.ImageService.getUserProfile(this.data.profileImg);
        }, err => {
            alert(`${id}번 유저 데이터를 불러오는 데 실패했습니다. 서버 관리자에게 문의하세요`);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }

    putData() {
        let data = angular.copy(this.data);

        let confirm = this.$mdDialog.confirm()
            .title(`${this.data.id}번 유저 정보를 정말로 변경하시겠어요?`)
            .ok('변경할게요')
            .cancel('다시 한번 생각해볼게요');

        this.$mdDialog.show(confirm).then(res => {
            this.APIService.resource('members.detail', {
                id: data.id
            }).put(data).then(res => {
                this.__userMethodResolve__('변경');
                this.isModifyEnable = false;
            }, err => {
                this.__userMethodReject__('변경', err);
                this.isModifyEnable = false;
            });
        }, err => {
            this.$parentScope.showUserModal(this.data.id);
        });
    }

    __userMethodResolve__(method) {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`${this.data.id}번 유저 정보가 성공적으로 ${method}되었습니다.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);

        this.close();
    }
    __userMethodReject__(method, err) {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`[${err.status}] 서버문제로 ${this.data.id}번 유저 정보 ${method}에 실패하였습니다. 현상이 계속 되면 서버관리자에게 문의하세요.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);
    }
}
