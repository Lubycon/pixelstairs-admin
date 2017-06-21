import { routerConfig } from './account.route';

import { SigninController } from './signin.controller';

angular
    .module('app.pages.account', [

    ])
    .config(routerConfig)

    .controller('SigninController', SigninController)
