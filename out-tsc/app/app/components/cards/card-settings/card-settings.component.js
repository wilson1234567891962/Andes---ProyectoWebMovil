import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CardSettingsComponent = class CardSettingsComponent {
    constructor(loginService, toastr, utilitiesService) {
        this.loginService = loginService;
        this.toastr = toastr;
        this.utilitiesService = utilitiesService;
        this.languageList = ['ESPAÑOL', 'INGLES'];
        this.language = '';
        this.email = '';
    }
    ngOnInit() {
        this.email = this.loginService.user;
        this.language = localStorage.getItem('LANGUAGE') ? localStorage.getItem('LANGUAGE') : 'ESPAÑOL';
        console.log(this.language);
    }
    saveSetting() {
        localStorage.setItem('LANGUAGE', this.language);
        this.toastr.info('Success', 'Info', {
            timeOut: 7000,
        });
    }
};
CardSettingsComponent = __decorate([
    Component({
        selector: 'app-card-settings',
        templateUrl: './card-settings.component.html',
    })
], CardSettingsComponent);
export { CardSettingsComponent };
//# sourceMappingURL=card-settings.component.js.map