import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let FooterSmallComponent = class FooterSmallComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
};
__decorate([
    Input()
], FooterSmallComponent.prototype, "absolute", null);
FooterSmallComponent = __decorate([
    Component({
        selector: "app-footer-small",
        templateUrl: "./footer-small.component.html",
    })
], FooterSmallComponent);
export { FooterSmallComponent };
//# sourceMappingURL=footer-small.component.js.map