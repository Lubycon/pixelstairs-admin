export class ContentInfoModalController {
    constructor(
        $scope, $mdDialog, toastr,
        contentId,
        APIService, ImageService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.toastr = toastr;
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
            alert(`${id}번 컨텐츠를 불러오는 데 실패했습니다. 서버 관리자에게 문의하세요`);
        });
    }

    close() {
        this.$mdDialog.cancel();
    }

    validateTag(tag) {
        if(this.data.hashTags.indexOf(tag) > -1) {
            console.log(this.data.hashTags);
        }
    }

    putData() {
        let data = angular.copy(this.data);

        this.APIService.resource('contents.detail', {
            id: data.id
        }).put(data).then(res => {
            this.toastr.success(`${this.data.id}번 컨텐츠가 성공적으로 변경되었습니다`);
            this.isModifyEnable = false;
        }, err => {
            this.toastr.error(`${this.data.id}번 컨텐츠변경에 실패하였습니다. 현상이 계속되면 서버관리자에게 문의하세요`);
        });
    }
}
