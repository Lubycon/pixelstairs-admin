export class AppSettingService {
    constructor (
        $rootScope, $http, $log, $q, $window,
        Restangular, CookieService,
        CUSTOM_HEADER_PREFIX
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$log = $log;
        this.$q = $q;
        this.$window = $window;

        this.Restangular = Restangular;
        this.CookieService = CookieService;

        this.CUSTOM_HEADER_PREFIX = CUSTOM_HEADER_PREFIX;
    }

    init() {
        /*LOG*/ this.$log.debug('App Setting init start...');
        let defer = this.$q.defer();

        defer.resolve();

        return defer.promise;
    }

    set(key, value) {
        const ALLOW_PARAMS = [
            'country',
            'language'
        ];

        let defaultHeaders = this.Restangular.defaultHeaders;
        let tmp = {};

        /*@LOG*/ this.$log.debug('AppSettingService.set => ', key, value);
        if(ALLOW_PARAMS.indexOf(key) > -1) {
            let headerKey = this.CUSTOM_HEADER_PREFIX + key;
            tmp[headerKey] = value;

            if(key === 'country') {
                tmp[this.CUSTOM_HEADER_PREFIX + 'language'] = this.__setLanguage__(value);
            }

            defaultHeaders = angular.extend({}, defaultHeaders, tmp);
        }
        else {
            this.$log.error('This value is not allowed for setting :: AppSettingService');
            return false;
        }

        /*@LOG*/ this.$log.debug(defaultHeaders);

        this.Restangular.setDefaultHeaders(defaultHeaders);
    }

    /* @PRIVATE METHOD */
    __setSetting__(data, storedData) {
        /*
            0. 쿠키에서 기존 세팅값이 있는 지 검색
            1. 기존 세팅값이 있다면 -> 기존 세팅 값과 현재 받아온 접속 위치의 국가코드가 다르다면 토스트 렌더
            2. 기존 접속위치와 현재 접속위치가 달라졌습니다. 언어를 현재 접속 위치에 맞게 바꾸시겠습니까?
            3. boolean -> exit 0
        */
        if(storedData) {
            this.$rootScope.setting = storedData;
        }
        else this.$rootScope.setting = data;

        /*LOG*/ this.$log.debug('SETTING DATA => ', this.$rootScope.setting);

        let tmp = {},
            lang = this.__setLanguage__(this.$rootScope.setting.country_code);

        this.$rootScope.setting.language = lang;
        tmp[`${this.CUSTOM_HEADER_PREFIX}language`] = lang;
        tmp[`${this.CUSTOM_HEADER_PREFIX}country`] = this.$rootScope.setting.country_code;

        this.$translate.use(this.$rootScope.setting.language.split('-')[0]);

        let defaultHeaders = angular.extend({}, this.Restangular.defaultHeaders, tmp);

        this.Restangular.setDefaultHeaders(defaultHeaders);

        this.CookieService.put('setting', this.$rootScope.setting);

        /*@LOG*/ this.$log.debug('HTTP HEADER => ', this.Restangular.defaultHeaders);
    }

    __removeStoredData__(reload) {
        this.CookieService.remove('setting');
        if(reload === 'reload') this.$window.location.reload();
    }

    __setLanguage__(country) {
        switch(country) {
            case 'KR': return 'ko-KR';
            default: return 'en-US';
        }
    }
}
