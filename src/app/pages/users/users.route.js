
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
        ;
}
