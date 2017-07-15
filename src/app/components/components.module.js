import { HeaderController } from './header/header.controller';
import { GlobalMenuController } from './aside/global-menu.controller';
import { FooterController } from './footer/footer.controller';

import { ContentInfoModalController } from './modals/content-info-modal/content-info-modal.controller';
import { UserInfoModalController } from './modals/user-info-modal/user-info-modal.controller';

angular
    .module('app.components', [

    ])
    .controller('HeaderController', HeaderController)
    .controller('GlobalMenuController', GlobalMenuController)
    .controller('FooterController', FooterController)

    .controller('ContentInfoModalController', ContentInfoModalController)
    .controller('UserInfoModalController', UserInfoModalController)
    ;
