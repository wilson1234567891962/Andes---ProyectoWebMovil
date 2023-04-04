import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environmentDev } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';
let StoreService = class StoreService {
    constructor(communicatorService) {
        this.communicatorService = communicatorService;
        this.URL_SERVICES = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
        this._product = undefined;
    }
    getStore(token) {
        return this.communicatorService.http_get(this.URL_SERVICES + 'STORE/getStore/', token);
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
};
StoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StoreService);
export { StoreService };
//# sourceMappingURL=store.service.js.map