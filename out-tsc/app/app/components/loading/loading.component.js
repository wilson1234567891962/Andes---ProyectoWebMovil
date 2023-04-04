import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LoadingComponent = class LoadingComponent {
    constructor() {
        this._loader = false;
    }
    ngOnInit() {
    }
    get loader() {
        return this._loader;
    }
    set loader(value) {
        this._loader = value;
    }
};
__decorate([
    Input()
], LoadingComponent.prototype, "_loader", void 0);
LoadingComponent = __decorate([
    Component({
        selector: 'app-loading',
        templateUrl: './loading.component.html'
    })
], LoadingComponent);
export { LoadingComponent };
//# sourceMappingURL=loading.component.js.map