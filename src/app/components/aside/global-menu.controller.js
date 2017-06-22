export class GlobalMenuController {
    constructor(
        $log, $rootScope, APP_GLOBAL_MENU,
        HistoryService
    ) {
        'ngInject';

        this.$log = $log;
        this.$rootScope = $rootScope;

        this.HistoryService = HistoryService;

        this.menuList = APP_GLOBAL_MENU;

        (this.init)();
    }

    init() {
        this.currentStateCheck(this.HistoryService.get().to);
        this.$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            currentStateCheck(toState);
        });
    }

    currentStateCheck(state) {
        this.menuList.forEach(function(v) {
            if(!v.submenu) {
                v.selected = true;
                return true;
            }
            else {
                v.submenu.forEach(function(v1) {
                    v1.selected = v1.link === state.name;
                    if(v1.selected) v.open = true;
                });
            }
        });
    }
}
