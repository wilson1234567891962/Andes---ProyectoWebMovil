import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoadingService = class LoadingService {
    constructor() {
        this.state = false;
    }
    setStateLoading(state) {
        this.state = state;
    }
    getStateLoading() {
        return this.state;
    }
};
LoadingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map