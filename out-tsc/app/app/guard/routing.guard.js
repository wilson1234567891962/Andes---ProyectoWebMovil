import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RoutingGuard = class RoutingGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.tokenSecret !== '') {
            return true;
        }
        this.router.navigate(['auth/login']);
        return false;
    }
};
RoutingGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RoutingGuard);
export { RoutingGuard };
//# sourceMappingURL=routing.guard.js.map