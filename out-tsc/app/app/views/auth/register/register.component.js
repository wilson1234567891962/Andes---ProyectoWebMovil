import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(loginService, route, utilitiesService, router, toastr) {
        this.loginService = loginService;
        this.route = route;
        this.utilitiesService = utilitiesService;
        this.router = router;
        this.toastr = toastr;
        this._email = '';
        this._password = '';
        this._hideOptionsRegister = false;
    }
    ngOnInit() {
        this.checkParameters();
    }
    validationInfo() {
        return !this.utilitiesService.validatorsFields(this._email) ||
            !this.utilitiesService.validatorsFields(this._password) || !this.utilitiesService.validatorsEmail(this._email);
    }
    checkParameters() {
        this.route.queryParams.subscribe(params => {
            if (params.id === 'forget') {
                this._hideOptionsRegister = true;
            }
        });
    }
    goBack() {
        this.router.navigate(['auth/login']);
    }
    validationEmail() {
        return !this.utilitiesService.validatorsFields(this._email) || !this.utilitiesService.validatorsEmail(this._email);
    }
    register() {
        this.loginService.register(this._email, this._password).subscribe(result => {
            this.toastr.success(result.data.code + ': ' + result.data.message, 'Info', {
                timeOut: 7000,
            });
        }, error => {
            this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                timeOut: 7000,
            });
        });
    }
    forgetPassword() {
        this.loginService.forgetPassword(this._email).subscribe(result => {
            this.toastr.success(result.code + ': ' + result.message, 'Info', {
                timeOut: 7000,
            });
        }, error => {
            this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                timeOut: 7000,
            });
        });
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get hideOptionsRegister() {
        return this._hideOptionsRegister;
    }
    set hideOptionsRegister(value) {
        this._hideOptionsRegister = value;
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map