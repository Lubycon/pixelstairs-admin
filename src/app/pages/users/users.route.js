
export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('common.default.users', {
            url: '/users',
            templateUrl: 'app/pages/users/user-list.tmpl.html',
            controller: 'UserListController',
            controllerAs: 'UsrListCtrl',
            authenticate: 'member'
        })
        .state('common.default.users-black', {
            url: '/users/blacklist',
            templateUrl: 'app/pages/users/user-blacklist.tmpl.html',
            controller: 'UserBlacklistController',
            controllerAs: 'UsrBlacklistCtrl',
            authenticate: 'member'
        })
        ;
}
