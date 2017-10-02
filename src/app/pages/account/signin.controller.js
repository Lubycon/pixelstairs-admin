export class SigninController {
    constructor(
        $log, $state,
        APIService, AuthenticationService
    ) {
        'ngInject';

        this.$log = $log;
        this.$state = $state;

        this.APIService = APIService;
        this.AuthenticationService = AuthenticationService;

        this.formData = {
            email: null,
            password: null
        };

        this.isBusy = false;
    }

    postData() {
        if(this.isBusy) return false;
        this.isBusy = true;

        let data = angular.copy(this.formData);
        this.APIService.resource('users.signin').post(data)
        .then(res => {
            /*@LOG*/ this.$log.debug(res);
            this.__resolve__(res.result).then(res => {
                this.$state.go('common.default.main');
            });
        }, err => {
            this.__reject__(err);
        });
    }

    /* @PRIVATE METHOD */
    __resolve__(token) {
        return this.AuthenticationService.set({
            accessToken: token.access_token,
            refreshToken: token.refresh_token,
            state: null
        });
    }

    __reject__(err) {
        this.isBusy = false;
        /*@LOG*/ this.$log.debug(err);

        if(err.status === 403) {
            alert('어드민 센터에 접속할 수 없는 계정입니다.');
        }
        else {
            alert(`[${err.status} ${err.statusText} ] - ${err.data.status.code} ${err.data.status.msg}`);
        }
    }
}
