
import { UserAgentDetection } from './ua.constant.js';
import { APP_GLOBAL_MENU, APP_HEADER_MENU, APP_USER_MENU } from './menu.constant.js';
import { API_LIST } from './api.constant';
import { FORM_DATA } from './form.constant';

angular
    .module('app.constants', [

    ])

    .constant('CUSTOM_HEADER_PREFIX', 'X-pixel-')

    .constant('USER_AGENT', UserAgentDetection())

    .constant('APP_LANGUAGES', [{
        name: 'LANGUAGES.ENGLISH',
        key: 'en-US'
    },{
        name: 'LANGUAGES.KOREAN',
        key: 'ko-KR'
    }])
    .constant('API_LIST', API_LIST)
    .constant('APP_GLOBAL_MENU', APP_GLOBAL_MENU)
    .constant('APP_HEADER_MENU', APP_HEADER_MENU)
    .constant('APP_USER_MENU', APP_USER_MENU)

    .constant('FORM_DATA', FORM_DATA)

    .constant('USER_DEFAULT_PROFILE_IMG', 'https://s3-ap-northeast-1.amazonaws.com/pixelstairsdev/user/default_profile_image.png')
    ;
