import { routerConfig } from './instagram.route';
import { InstagramFollowController } from './instagram-follow.controller';

angular
    .module('app.pages.instagram', [

    ])
    .config(routerConfig)
    .controller('InstagramFollowController', InstagramFollowController)
    ;
