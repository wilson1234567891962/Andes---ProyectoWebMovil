import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { createPopper } from "@popperjs/core";
let TableDropdownComponent = class TableDropdownComponent {
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
], TableDropdownComponent.prototype, "btnDropdownRef", void 0);
__decorate([
    ViewChild("popoverDropdownRef", { static: false })
], TableDropdownComponent.prototype, "popoverDropdownRef", void 0);
TableDropdownComponent = __decorate([
    Component({
        selector: "app-table-dropdown",
        templateUrl: "./table-dropdown.component.html",
    })
], TableDropdownComponent);
export { TableDropdownComponent };
//# sourceMappingURL=table-dropdown.component.js.map