
export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('common.default.insta-follow', {
            url: '/insta/followers',
            templateUrl: 'app/pages/instagram/instagram-follow.tmpl.html',
            controller: 'InstagramFollowController',
            controllerAs: 'InstaFollowCtrl',
            authenticate: 'member'
        })
        ;
}
