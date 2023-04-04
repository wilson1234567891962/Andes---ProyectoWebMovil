import { __decorate } from "tslib";
import { Component } from "@angular/core";
let IndexNavbarComponent = class IndexNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
IndexNavbarComponent = __decorate([
    Component({
        selector: "app-index-navbar",
        templateUrl: "./index-navbar.component.html",
    })
], IndexNavbarComponent);
export { IndexNavbarComponent };
//# sourceMappingURL=index-navbar.component.js.map