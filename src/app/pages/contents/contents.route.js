
export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('common.default.contents', {
            url: '/contents',
            templateUrl: 'app/pages/contents/content-list.tmpl.html',
            controller: 'ContentListController',
            controllerAs: 'ContentListCtrl',
            authenticate: 'member'
        })
        ;
}
