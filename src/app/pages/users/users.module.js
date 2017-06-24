import { routerConfig } from './users.route';
import { UserListController } from './user-list.controller';

angular
    .module('app.pages.users', [

    ])
    .config(routerConfig)
    .controller('UserListController', UserListController)
    ;
