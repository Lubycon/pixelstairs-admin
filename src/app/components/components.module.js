import { HeaderController } from './header/header.controller';
import { FooterController } from './footer/footer.controller';

angular
    .module('app.components', [

    ])
    .controller('HeaderController', HeaderController)
    .controller('FooterController', FooterController)
    ;
