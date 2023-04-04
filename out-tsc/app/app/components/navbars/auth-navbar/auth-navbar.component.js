import { __decorate } from "tslib";
import { Component } from "@angular/core";
let AuthNavbarComponent = class AuthNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AuthNavbarComponent = __decorate([
    Component({
        selector: "app-auth-navbar",
        templateUrl: "./auth-navbar.component.html",
    })
], AuthNavbarComponent);
export { AuthNavbarComponent };
//# sourceMappingURL=auth-navbar.component.js.map