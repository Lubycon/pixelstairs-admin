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
    }

    postData() {
        let data = angular.copy(this.formData);
        this.APIService.resource('members.signin').post(data)
        .then(res => {
            /*@LOG*/ this.$log.debug(res);
            this.__resolve__(res.result.token).then(res => {
                this.$state.go('common.default.main');
            });
        }, err => {
            this.__reject__(err);
        });
    }

    /* @PRIVATE METHOD */
    __resolve__(token) {
        return this.AuthenticationService.set({
            token,
            state: null
        });
    }

    __reject__(err) {
        /*@LOG*/ this.$log.debug(err);
        alert(`[${err.status} ${err.statusText} ] - ${err.data.status.code} ${err.data.status.msg}`);
    }
}
