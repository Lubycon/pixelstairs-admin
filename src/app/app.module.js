import { routerConfig } from './app.route';
import { run } from './app.run';

import './env.js';
import './config/config.module';
import './constants/constants.module';
import './directives/directives.module';
import './layouts/layout.module';
import './components/components.module';
import './services/services.module';
import './filters/filters.module';
import './pages/pages.module';

angular
    .module('app', [
        'ngAnimate', // animate.css MODULE
        'ngCookies', // COOKIE STORE MODULE
        'ngSanitize', // STRING TO HTML CONVERTING MODULE
        'ngMessages', // FORM ERROR OR INFO MESSAGE MODULE
        'ngAria', // FORM CONTROL MODULE
        'ngMaterial', // ANGULAR MATERIAL MODULE
        'restangular', // REST API MODULE
        'ui.router', // STATE CONTROL MODULE FOR SPA
        'ngFileUpload', // FILE UPLOAD MODULE
        'infinite-scroll', // INFINITE SCROLL
        'mdDataTable', // TABLE MODULE
        'angularMoment', // MOMENT MODULE

        'app.env', // ENV CONSTANTS
        'app.config', // APP CONFIG MODULE
        'app.constants', // APP CONSTANTS MODULE
        'app.layouts', // APP LAYOUT MODULE
        'app.components', // APP COMPONENTS MODULE
        'app.services', // APP SERVICE MODULE
        'app.filters', // APP FILTER MODULE
        'app.directives', // APP DIRECTIVE MODULE

        'app.pages' // PAGE MODULE
    ])
    .config(routerConfig)
    .run(run)
    ;
