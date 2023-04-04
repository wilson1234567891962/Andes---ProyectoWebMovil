import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
let CommunicatorService = class CommunicatorService {
    constructor(http, loadingService) {
        this.http = http;
        this.loadingService = loadingService;
        this.isShowLoad = false;
        this.counterLoading = 0;
        this.requests = [];
    }
    http_post(url, body, tokenService) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.post(url, body, { headers }).pipe(tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            throwError(error);
        }));
    }
    http_get(url, tokenService) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.get(url, { headers }).pipe(tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            throwError(error);
        }));
    }
    http_put(url, tokenService, data) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.put(url, data, { headers }).pipe(tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            throwError(error);
        }));
    }
    showLoad() {
        this.counterLoading++;
        if (this.isShowLoad) {
            return;
        }
        this.isShowLoad = true;
        this.loadingService.setStateLoading(true);
        this.requests.push(this.isShowLoad);
    }
    hideLoad() {
        this.counterLoading--;
        this.requests.splice(0, 1);
        if (this.requests.length === 0 && this.counterLoading === 0) {
            this.isShowLoad = false;
            this.loadingService.setStateLoading(false);
        }
    }
};
CommunicatorService = __decorate([
    Injectable()
], CommunicatorService);
export { CommunicatorService };
//# sourceMappingURL=communicator.service.js.map