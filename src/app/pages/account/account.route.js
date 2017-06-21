
export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('full.default.signin', {
            url: '/signin',
            templateUrl: 'app/pages/account/signin.tmpl.html',
            controller: 'SigninController',
            controllerAs: 'SigninCtrl',
            authenticate: 'visitor'
        })
        ;
}
