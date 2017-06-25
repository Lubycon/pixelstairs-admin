export class DefaultLayoutController {
    constructor($rootScope) {
        'ngInject';

        this.name = 'default'
        this.header = true;
        this.aside = true;
        this.footer = false;
        this.isMobile = $rootScope.deviceInfo.isMobile;
    }
}
