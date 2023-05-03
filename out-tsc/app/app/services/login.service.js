import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environmentProd } from '../../environments/environment.prod';
import { environmentDev } from '../../environments/environment.dev';
let LoginService = class LoginService {
    constructor(communicatorService) {
        this.communicatorService = communicatorService;
        this._user = '';
        this._password = '';
        this._tokenSecret = '';
        this._rol = '';
        this.URL_SERVICES = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
    }
    login() {
        const body = {
            email: this.user,
            password: this.password
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'login/', body);
    }
    register(email, password) {
        const body = {
            email,
            password
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'register/', body);
    }
    forgetPassword(email) {
        const body = {
            email
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'forgetPassword/', body);
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get tokenSecret() {
        return this._tokenSecret;
    }
    set tokenSecret(value) {
        this._tokenSecret = value;
    }
    get rol() {
        return this._rol;
    }
    set rol(value) {
        this._rol = value;
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map