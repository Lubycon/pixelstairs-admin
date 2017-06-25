export class HeaderController {
    constructor(
        $rootScope, $log,
        AuthenticationService, ImageService,
        APP_HEADER_MENU, APP_USER_MENU
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.$log = $log;
        this.AuthenticationService = AuthenticationService;
        this.ImageService = ImageService;

        this.isMobile = $rootScope.deviceInfo.isMobile;

        this.member = $rootScope.member;
        this.userProfileImg = this.member ?
            ImageService.getUserProfile(this.member.profileImg) :
            null;


        this.linkMenuList = APP_HEADER_MENU;
        this.userMenuList = APP_USER_MENU;
    }

    userMenuTrigger($mdOpenMenu, event) {
        $mdOpenMenu(event);
    }

    signout() {
        this.AuthenticationService.clear('reload');
    }

    /* @PRIVATE METHOD */
}
