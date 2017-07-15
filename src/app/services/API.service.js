/* @API CONSTANT */
const API_LIST = {
    members: () => {
        const prefix = 'members';
        return {
            signin: `v1/${prefix}/signin`,
            signout: `v1/${prefix}/signout`,
            signup: `v1/${prefix}/signup`,
            signdrop: `v1/${prefix}/signdrop`,

            list: `admin/${prefix}`,
            simple: `v1/${prefix}/simple`,
            detail: `admin/${prefix}/{id}/detail`,

            isExist: `v1/${prefix}/isexist`,
            pwd: {
                mail: `v1/${prefix}/password/mail`,
                reset: `v1/${prefix}/password/reset`
            }
        };
    },
    contents: () => {
        const prefix = 'contents';
        return {
            list: `v1/${prefix}`,
            detail: `admin/${prefix}/{id}`
        };
    },
    certs: () => {
        const prefix = 'certs';
        return {
            signup: {
                mail: `${prefix}/signup/mail`,
                time: `${prefix}/signup/time`,
                code: `${prefix}/signup/code`
            },
            password: {
                code: `${prefix}/password/code`
            }
        };
    },
    quotes: () => {
        const prefix = 'quotes';
        return {
            success: `${prefix}/success`,
            mistake: `${prefix}/mistake`
        };
    }
};
/* @API CONSTANT */


export class APIService {
    constructor(
        Restangular, $log, $q
    ) {
        'ngInject';

        this.Restangular = Restangular;
        this.$log = $log;
        this.$q = $q;
        this.API = this.__generateAPI__();
    }

    resource(api, id) {
        return {
            get: (params) => this.__get__(api, id, params),
            post: (data) => this.__post__(api, id, data),
            put: (data) => this.__put__(api, id, data),
            delete: () => this.__delete__(api, id)
        };
    }


    /* @PRIVATE METHOD */
    __get__(api, id, params) {
        api = this.__getURI__(api, id);
        return this.__validate__(this.Restangular.all(api).customGET('', params));
    }

    __post__(api, id, data) {
        api = this.__getURI__(api, id);
        this.$log.debug(api);
        return this.__validate__(this.Restangular.all(api).customPOST(data, undefined, undefined, {
            'Content-Type': 'application/json'
        }));
    }

    __put__(api, id, data) {
        api = this.__getURI__(api, id);
        return this.__validate__(this.Restangular.all(api).customPUT(data, undefined, undefined, {
            'Content-Type': 'application/json'
        }));
    }

    __delete__(api, id) {
        api = this.__getURI__(api, id);
        return this.__validate__(this.Restangular.all(api).customDELETE());
    }

    __validate__(response) {
        let defer = this.$q.defer();
        response.then(res => {
            if(res.status.code === '0000') {
                defer.resolve({ result: res.result, status: res.status });
            }
            else {
                defer.reject(res.status);
            }
        }, err => {
            defer.reject(err);
        });

        return defer.promise;
    }

    __getURI__(api, id, uri, list = this.API, index = 0) {
        let tmp = api.split('.');
        uri = uri;

        if(list[tmp[index]]) {
            if(angular.isString(list[tmp[index]])) {
                uri = list[tmp[index]];
                return this.__setParamsToAPI__(uri, id);
            }
            else if(angular.isObject(list[tmp[index]])) {
                return this.__getURI__(api, id, tmp[index], list[tmp[index]], index+1);
            }
        }
        else {
            return uri;
        }
    }

    __generateAPI__() {
        let tmp = {};

        Object.keys(API_LIST).forEach((v) => {
            if(angular.isFunction(API_LIST[v])) {
                tmp[v] = API_LIST[v]();
            }
            else tmp[v] = API_LIST[v];
        });

        return tmp;
    }

    __setParamsToAPI__(uri, uriParams) {
        const regx = /\{.+\}/gi;
        const braket_regx = /[\{|\}]/g;

        let params = uri.match(regx);
        if(!params) {
            return uri;
        }

        params = params.map(v => {
            return v.replace(braket_regx, '');
        });

        uri = uri.split('/').map(v => {
            return v.replace(braket_regx, '');
        });

        params.forEach(v => {
            let position = uri.indexOf(v);
            if(position > -1) uri[position] = uriParams[v];
        });

        return uri.join('/');
    }
}
