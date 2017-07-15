import { HeaderController } from './header/header.controller';
import { GlobalMenuController } from './aside/global-menu.controller';
import { FooterController } from './footer/footer.controller';

import { UserInfoModalController } from './modals/user-info-modal/user-info-modal.controller';

angular
    .module('app.components', [

    ])
    .controller('HeaderController', HeaderController)
    .controller('GlobalMenuController', GlobalMenuController)
    .controller('FooterController', FooterController)

    .controller('UserInfoModalController', UserInfoModalController)
    ;
