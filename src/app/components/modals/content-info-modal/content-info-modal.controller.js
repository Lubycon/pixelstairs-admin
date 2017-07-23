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

        this.originData = null;
        this.data = null;
        this.contentImage = null;

        this.isModifyEnable = false;
        this.isDeletedContent = true;

        (this.init)(contentId);
    }

    init(id) {
        this.getContentData(id);
    }

    getContentData(id) {
        return this.APIService.resource('contents.detail', {
            id
        }).get().then(res => {
            this.originData = res.result;
            this.data = angular.copy(res.result);
            this.isDeletedContent = !!this.data.deletedAt;
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

        let confirm = this.$mdDialog.confirm()
            .title(`${this.data.id}번 컨텐츠를 정말로 변경하시겠어요?`)
            .ok('변경할게요')
            .cancel('다시 한번 생각해볼게요');

        this.$mdDialog.show(confirm).then(res => {
            this.APIService.resource('contents.detail', {
                id: data.id
            }).put(data).then(res => {
                this.__contentMethodResolve__('변경');
                this.isModifyEnable = false;
            }, err => {
                this.__contentMethodReject__('변경', err);
                this.isModifyEnable = false;
            });
        }, err => {
            this.$parentScope.showContentModal(this.data.id);
        });
    }

    deleteData() {
        let confirm = this.$mdDialog.confirm()
            .title(`${this.data.id}번 컨텐츠를 정말로 삭제하시겠어요?`)
            .ok('네')
            .cancel('다시 한번 생각해볼게요');
        this.$mdDialog.show(confirm).then(res => {
            this.APIService.resource('contents.detail', {
                id: this.data.id
            }).delete().then(res => {
                this.__contentMethodResolve__('삭제');
            }, err => {
                this.__contentMethodReject__('삭제', err);
            });
        }, err => {
            this.$parentScope.showContentModal(this.data.id);
        });
    }

    __contentMethodResolve__(method) {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`${this.data.id}번 컨텐츠가 성공적으로 ${method}되었습니다.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);

        this.close();
    }
    __contentMethodReject__(method, err) {
        let toast = this.$mdToast.simple()
            .position('top right')
            .textContent(`[${err.status}] 서버문제로 ${this.data.id}번 컨텐츠 ${method}에 실패하였습니다. 현상이 계속 되면 서버관리자에게 문의하세요.`)
            .hideDelay(3000);
        this.$mdToast.show(toast);
    }
}
