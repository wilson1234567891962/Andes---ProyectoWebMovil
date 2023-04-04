import { __decorate } from "tslib";
import { Component } from "@angular/core";
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.collapseShow = "hidden";
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
};
SidebarComponent = __decorate([
    Component({
        selector: "app-sidebar",
        templateUrl: "./sidebar.component.html",
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map