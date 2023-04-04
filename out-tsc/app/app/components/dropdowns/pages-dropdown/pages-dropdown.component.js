import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";
let PagesDropdownComponent = class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        createPopper(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
__decorate([
    ViewChild("btnDropdownRef", { static: false })
], PagesDropdownComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], PagesDropdownComponent.prototype, "popoverDropdownRef", void 0);
PagesDropdownComponent = __decorate([
    Component({
        selector: "app-pages-dropdown",
        templateUrl: "./pages-dropdown.component.html",
    })
], PagesDropdownComponent);
export { PagesDropdownComponent };
//# sourceMappingURL=pages-dropdown.component.js.map