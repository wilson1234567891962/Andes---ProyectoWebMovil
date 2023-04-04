import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";
let UserDropdownComponent = class UserDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        createPopper(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
__decorate([
    ViewChild("btnDropdownRef", { static: false })
], UserDropdownComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], UserDropdownComponent.prototype, "popoverDropdownRef", void 0);
UserDropdownComponent = __decorate([
    Component({
        selector: "app-user-dropdown",
        templateUrl: "./user-dropdown.component.html",
    })
], UserDropdownComponent);
export { UserDropdownComponent };
//# sourceMappingURL=user-dropdown.component.js.map