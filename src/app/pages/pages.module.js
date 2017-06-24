
import './main/main.module';
import './account/account.module';
import './users/users.module';

angular
    .module('app.pages', [
        'app.pages.main',
        'app.pages.account',
        'app.pages.users'
    ])
    ;
