import { routerConfig } from './contents.route';
import { ContentListController } from './content-list.controller';

angular
    .module('app.pages.contents', [

    ])
    .config(routerConfig)
    .controller('ContentListController', ContentListController)
    ;
