import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";
let IndexDropdownComponent = class IndexDropdownComponent {
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
], IndexDropdownComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], IndexDropdownComponent.prototype, "popoverDropdownRef", void 0);
IndexDropdownComponent = __decorate([
    Component({
        selector: "app-index-dropdown",
        templateUrl: "./index-dropdown.component.html",
    })
], IndexDropdownComponent);
export { IndexDropdownComponent };
//# sourceMappingURL=index-dropdown.component.js.map