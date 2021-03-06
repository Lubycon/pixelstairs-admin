export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('common', {
            abstract: true,
            templateUrl: 'app/layouts/common.layout.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layout'
        })
        .state('common.default', {
            abstract: true,
            views: {
                header: {
                    templateUrl: 'app/components/header/header.tmpl.html',
                    controller: 'HeaderController',
                    controllerAs: 'GlobalHeaderCtrl'
                },
                aside: {
                    templateUrl: 'app/components/aside/global-menu.tmpl.html',
                    controller: 'GlobalMenuController',
                    controllerAs: 'GlobalMenuCtrl'
                },
                content: {
                    template: '<div ui-view></div>'
                }
            }
        })
        .state('full', {
            abstract: true,
            templateUrl: 'app/layouts/common.layout.html',
            controller: 'FullLayoutController',
            controllerAs: 'layout'
        })
        .state('full.default', {
            abstract: true,
            views: {
                content: {
                    template: '<div ui-view></div>'
                }
            }
        })
        ;
}
