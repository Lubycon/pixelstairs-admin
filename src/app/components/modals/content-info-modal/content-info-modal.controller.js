export class ContentInfoModalController {
    constructor(
        $scope, $mdDialog, contentId, APIService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.APIService = APIService;

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
        }, err => {
            alert(`${id}번 컨텐츠를 불러오는 데 실패했습니다. 서버 관리자에게 문의하세요`);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }
}
