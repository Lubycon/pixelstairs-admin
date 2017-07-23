import { routerConfig } from './users.route';
import { UserListController } from './user-list.controller';
import { UserBlacklistController } from './user-blacklist.controller';

angular
    .module('app.pages.users', [

    ])
    .config(routerConfig)
    .controller('UserListController', UserListController)
    .controller('UserBlacklistController', UserBlacklistController)
    ;
