
export class MainController {
    constructor (
        $rootScope, $scope, $log, $timeout, $location,
        APIService, CookieService,
        MAIN_GRID_INIT
    ) {
        'ngInject';

        (this.init)();
    }

    init() {

    }
}
