import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";
let NotificationDropdownComponent = class NotificationDropdownComponent {
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
], NotificationDropdownComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], NotificationDropdownComponent.prototype, "popoverDropdownRef", void 0);
NotificationDropdownComponent = __decorate([
    Component({
        selector: "app-notification-dropdown",
        templateUrl: "./notification-dropdown.component.html",
    })
], NotificationDropdownComponent);
export { NotificationDropdownComponent };
//# sourceMappingURL=notification-dropdown.component.js.map