import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(loginService, router, utilitiesService, toastr) {
        this.loginService = loginService;
        this.router = router;
        this.utilitiesService = utilitiesService;
        this.toastr = toastr;
        this._email = '';
        this._password = '';
        this._isChecked = false;
        this._disable = false;
    }
    ngOnInit() {
        this.checkIsSaveUser();
    }
    checkIsSaveUser() {
        const emailSaved = localStorage.getItem('USER_ACTIVE');
        if (emailSaved !== undefined && emailSaved !== 'null' && emailSaved !== '') {
            this._email = emailSaved;
            this._isChecked = true;
        }
    }
    checkInfo() {
        return !this.utilitiesService.validatorsFields(this._email) ||
            !this.utilitiesService.validatorsFields(this._password) || !this.utilitiesService.validatorsEmail(this._email);
    }
    saveUser() {
        if (!this._isChecked) {
            this._isChecked = true;
            localStorage.setItem('USER_ACTIVE', this._email);
        }
        else {
            this._isChecked = false;
            localStorage.setItem('USER_ACTIVE', '');
        }
    }
    login() {
        this.loginService.user = this._email;
        this.loginService.password = this._password;
        if (this._isChecked) {
            localStorage.setItem('USER_ACTIVE', this._email);
        }
        this.loginService.login().subscribe(result => {
            this.loginService.tokenSecret = result.data.token;
            this.loginService.rol = result.data.rol;
            this.router.navigate(['admin/tables']);
        }, error => {
            this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                timeOut: 7000,
            });
        });
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
    }
    get disable() {
        return this._disable;
    }
    set disable(value) {
        this._disable = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map