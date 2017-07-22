import '../constants/constants.module';

import { httpConfig } from './http.config';
import { cookieConfig } from './cookie.config';
import { locationConfig } from './location.config';
import { languageConfig } from './language.config';
import { restangularConfig } from './restangular.config';
import { logConfig } from './log.config';
import { materialConfig } from './material.config';

angular
    .module('app.config', [
        'app.env', 'app.constants'
    ])
    .config(httpConfig)

    .config(cookieConfig)

    .config(locationConfig)

    .config(languageConfig)

    .config(restangularConfig)

    .config(logConfig)

    .config(materialConfig)
    ;
