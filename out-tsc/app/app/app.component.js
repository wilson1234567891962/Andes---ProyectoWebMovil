import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.title = 'angular-dashboard-page';
    }
    getStateLoading() {
        return this.loadingService.getStateLoading();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map