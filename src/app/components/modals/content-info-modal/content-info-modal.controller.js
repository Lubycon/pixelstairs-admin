export class ContentInfoModalController {
    constructor(
        $parentScope, $scope, $mdDialog, $mdToast,
        contentId,
        APIService, ImageService
    ) {
        'ngInject';

        this.$parentScope = $parentScope;
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
        this.APIService = APIService;
        this.ImageService = ImageService;

        this.data = null;
        this.contentImage = null;

        this.isModifyEnable = false;
        this.isContentDelete = false;

        (this.init)(contentId);
    }

    init(id) {
        this.getContentData(id);
    }

    getContentData(id) {
        return this.APIService.resource('contents.detail', {
            id
        }).get().then(res => {
            this.data = res.result;
            this.contentImage = this.ImageService.setResolution(this.data.image, '640');
        }, err => {
            let alert = this.$mdDialog.alert()
                .title('컨텐츠 불러오기 에러')
                .textContent(`[err: ${err.status}] ${id}번 컨텐츠를 불러오는 데 실패했습니다. 현상이 계속되면 서버 관리자에게 문의하세요`)
                .ok('닫기');
            this.$mdDialog.show(alert);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }

    putData() {
        let data = angular.copy(this.data);

        this.APIService.resource('contents.detail', {
            id: data.id
        }).put(data).then(res => {
            let toast = this.$mdToast.simple()
                .position('top right')
                .textContent(`${this.data.id}번 컨텐츠가 성공적으로 변경되었습니다`)
                .hideDelay(3000);
            this.$mdToast.show(toast);
            this.isModifyEnable = false;
        }, err => {
            let toast = this.$mdToast.simple()
                .position('top right')
                .textContent(`서버문제로 ${this.data.id}번 컨텐츠변경에 실패하였습니다. 현상이 계속 되면 서버관리자에게 문의하세요.`)
                .hideDelay(3000);
            this.$mdToast.show(toast);
        });
    }

    confirmDeleteContent() {
        let confirm = this.$mdDialog.confirm()
            .textContent(`${this.data.id}번 컨텐츠를 정말로 삭제하시겠어요?`)
            .ok('네')
            .cancel('다시 한번 생각해볼게요');
        this.$mdDialog.show(confirm).then(res => {
            this.APIService.resource('contents.detail', {
                id: this.data.id
            }).delete().then(res => {
                this.__contentDeleteResolve__();
            }, err => {
                this.__contentDeleteReject__();
            });
        }, err => {
            this.$parentScope.showContentModal(this.data.id);
        });
    }

    __contentDeleteResolve__() {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`서버문제로 ${this.data.id}번 컨텐츠가 성공적으로 삭제되었습니다.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);

        this.close();
    }
    __contentDeleteReject__() {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`서버문제로 ${this.data.id}번 컨텐츠 삭제에 실패하였습니다. 현상이 계속 되면 서버관리자에게 문의하세요.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);
    }
}
