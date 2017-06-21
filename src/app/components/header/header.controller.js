export class HeaderController {
    constructor(
        $rootScope, $log,
        AuthenticationService, ImageService
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


        this.linkMenuList = [{
            icon: 'xi-presentation',
            name: 'Dashboard',
            link: 'common.default.main'
        },{
            icon: 'xi-branch',
            name: '[Test] Branch',
            link: 'common.default.main'
        },{
            icon: 'xi-pull-requests',
            name: '[Test] Pull Request',
            link: 'common.default.main'
        },{
            icon: 'xi-merge',
            name: '[Test] Merge',
            link: 'common.default.main'
        }];

        this.userMenuList = [{
            icon: 'xi-presentation',
            name: 'Dashboard',
            link: 'common.default.main'
        },{
            icon: 'xi-branch',
            name: '[Test] Branch',
            link: 'common.default.main'
        },{
            icon: 'xi-pull-requests',
            name: '[Test] Pull Request',
            link: 'common.default.main'
        }];
    }

    userMenuTrigger($mdOpenMenu, event) {
        $mdOpenMenu(event);
    }

    signout() {
        this.AuthenticationService.clear('reload');
    }

    /* @PRIVATE METHOD */
}
