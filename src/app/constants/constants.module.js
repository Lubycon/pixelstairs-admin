
import { UserAgentDetection } from './ua.constant.js';
import { APP_GLOBAL_MENU } from './menu.constant.js';

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

    .constant('APP_GLOBAL_MENU', APP_GLOBAL_MENU)

    .constant('USER_DEFAULT_PROFILE_IMG', 'https://s3-ap-northeast-1.amazonaws.com/pixelstairsdev/user/default_profile_image.png')
    ;
