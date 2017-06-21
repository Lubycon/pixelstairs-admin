export class DefaultLayoutController {
    constructor($rootScope) {
        'ngInject';

        this.header = true;
        this.aside = true;
        this.footer = false;
        this.isMobile = $rootScope.deviceInfo.isMobile;
    }
}
