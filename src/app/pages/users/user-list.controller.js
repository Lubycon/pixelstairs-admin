
export class UserListController {
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

        return this.APIService.resource('users.list').get(this.query)
        .then(res => {
            if(res.result && res.result.users) {
                this.__bindToTemp__(res);
                return {
                    results: res.result.users,
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
                userId: id,
                $parentScope: this
            }
        });
    }

    __bindToTemp__(res) {
        if(!this._tempList) this._tempList = { data: [], totalCount: 0 };
        if(res.result && res.result.users) {
            this._tempList.data = $.merge(this._tempList.data, res.result.users);
            this._tempList.totalCount = res.result.totalCount;
        }
    }
}
