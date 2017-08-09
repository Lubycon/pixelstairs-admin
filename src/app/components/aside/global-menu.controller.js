export class GlobalMenuController {
    constructor(
        $log, $rootScope, APP_GLOBAL_MENU,
        HistoryService, ImageService
    ) {
        'ngInject';

        this.$log = $log;
        this.$rootScope = $rootScope;

        this.HistoryService = HistoryService;

        this.member = $rootScope.member;
        this.memberFace = this.member && ImageService.getUserProfile(this.member.profileImg);
        this.menuList = APP_GLOBAL_MENU;

        (this.init)();
    }

    init() {
        this.currentStateCheck(this.HistoryService.get().to);
        this.$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
            this.currentStateCheck(toState);
        });

        this.__calcMenuHeight__();
    }

    currentStateCheck(state) {
        this.menuList.forEach(function(v) {
            v.selected = v.open = false;
            if(!v.submenu) {
                v.selected = v.link === state.name;
            }
            else {
                v.submenu.forEach(function(v1) {
                    v1.selected = false;
                    v1.selected = v1.link === state.name;
                    if(v1.selected) v.open = v.selected = v1.selected;
                });
            }
        });
    }

    /* PRIVATE */
    __calcMenuHeight__() {
        setTimeout(() => {
            const el = angular.element('.sub-menu');
            el.each((i, v) => {
                v.style.height = angular.element(v).find('.sub-menu-wrapper').outerHeight() + 'px';
            });
        });
    }
}
