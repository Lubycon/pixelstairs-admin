import { HeaderController } from './header/header.controller';
import { GlobalMenuController } from './aside/global-menu.controller';
import { FooterController } from './footer/footer.controller';

angular
    .module('app.components', [

    ])
    .controller('HeaderController', HeaderController)
    .controller('GlobalMenuController', GlobalMenuController)
    .controller('FooterController', FooterController)
    ;
