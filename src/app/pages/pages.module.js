
import './main/main.module';
import './account/account.module';
import './users/users.module';
import './contents/contents.module';
import './instagram/instagram.module';

angular
    .module('app.pages', [
        'app.pages.main',
        'app.pages.account',
        'app.pages.users',
        'app.pages.contents',
        'app.pages.instagram'
    ])
    ;
