import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environmentDev } from '../../environments/environment.dev';
import { environmentProd } from '../../environments/environment.prod';
let OrderService = class OrderService {
    constructor(communicatorService) {
        this.communicatorService = communicatorService;
        this.URL_SERVICES = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
        this._orders = undefined;
    }
    getOrders(token) {
        return this.communicatorService.http_get(this.URL_SERVICES + 'ORDER/getOrder/', token);
    }
    getDriver(token) {
        return this.communicatorService.http_get(this.URL_SERVICES + 'ORDER/getDriver/', token);
    }
    updateOrders(token, orders) {
        return this.communicatorService.http_put(this.URL_SERVICES + 'ORDER/updateOrder/', token, orders);
    }
    get orders() {
        return this._orders;
    }
    set orders(value) {
        this._orders = value;
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map