export function run (
    $rootScope, $log, $q, AppSettingService, HistoryService,
    StateAuthenticationService, AuthenticationService,
    $anchorScroll, $window, $document, $state, $timeout, USER_AGENT
) {
    'ngInject';

    $rootScope.deviceInfo = USER_AGENT;

    const initStarter = () => {
        let defer = $q.defer();
        defer.resolve();
        return defer.promise;
    };

    /* app init start */
    initStarter()
    .then(res => { return AppSettingService.init(); })
    .then(res => { return AuthenticationService.init(); })
    .then(res => {
        /*LOG*/ $log.debug('APP INIT IS DONE!!', res);
        $rootScope.Initialized = true;
        __disableScrollBySpace__($window, $document);

        /*@LOG*/ $log.debug('ROOT SCOPE => ', $rootScope);
        /*@LOG*/ $log.debug('***================================ RUN BLOCK END ================================***');
    });
    /* app init end */

    $rootScope.$on('$stateChangeSuccess', (
        event, toState, toParams, fromState, fromParams
    ) => {
        StateAuthenticationService.detect(toState);

        $anchorScroll();
    });
}

/*@PRIVATE METHOD*/
function __disableScrollBySpace__($window, $document) {
    $window.onkeydown = event => {
        if(event.keyCode === 32 && event.target == $document.body) {
            event.preventDefault();
            return false;
        }
    };
}
