
export class ContentListController {
    constructor (
        $rootScope, $scope, $log, $location,
        $mdDialog,
        APIService, ImageService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;

        this.APIService = APIService;
        this.ImageService = ImageService;

        this.query = {
            pageIndex: $location.search().pageIndex || 1,
            pageSize: $location.search().PageSize || 20
        };

        (this.init)();
    }

    init() {

    }

    getDataCollection(pageIndex, pageSize) {
        this.query.pageIndex = pageIndex || this.query.pageIndex;
        this.query.pageSize = pageSize || this.query.pageSize;

        return this.APIService.resource('contents.list').get(this.query)
        .then(res => {
            if(res.result && res.result.contents) {
                res.result.contents.forEach(v => {
                    v.createdAt = new Date(v.createdAt);
                    v.updatedAt = new Date(v.updatedAt);
                });

                this.__bindToTemp__(res);
                return {
                    results: res.result.contents,
                    totalResultCount: res.result.totalCount
                };
            }
            else {
                return {
                    results: [],
                    totalResultCount: 0
                };
            }
        });
    }

    showUserModal(id) {
        this.$mdDialog.show({
            controller: 'UserInfoModalController',
            controllerAs: 'UsrInfoModal',
            templateUrl: 'app/components/modals/user-info-modal/user-info-modal.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                userId: id
            }
        });
    }

    showContentModal(id) {
        this.$mdDialog.show({
            controller: 'ContentInfoModalController',
            controllerAs: 'ContentInfoModal',
            templateUrl: 'app/components/modals/content-info-modal/content-info-modal.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                contentId: id
            }
        });
    }

    __bindToTemp__(res) {
        if(!this._tempList) this._tempList = { data: [], totalCount: 0 };
        if(res.result && res.result.contents) {
            this._tempList.data = $.merge(this._tempList.data, res.result.contents);
            this._tempList.totalCount = res.result.totalCount;
        }
    }
}
