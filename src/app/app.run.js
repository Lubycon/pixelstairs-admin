export function run (
    $rootScope, $log, $q, AppSettingService, HistoryService,
    StateAuthenticationService, AuthenticationService,
    $anchorScroll, $window, $document, $state, $timeout, USER_AGENT
) {
    'ngInject';

    $rootScope.deviceInfo = USER_AGENT;

    $rootScope.$on('$stateChangeSuccess', (
        event, toState, toParams, fromState, fromParams
    ) => {
        StateAuthenticationService.detect(toState);

        $anchorScroll();
    });
}
