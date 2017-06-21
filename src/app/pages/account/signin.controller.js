export class SigninController {
    constructor() {
        'ngInject';

        this.formData = {
            email: null,
            password: null
        };
    }

    postData() {
        console.log(this.formData);
    }
}
