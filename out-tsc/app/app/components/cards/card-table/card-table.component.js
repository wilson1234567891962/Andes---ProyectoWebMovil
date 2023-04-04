import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardTableComponent = class CardTableComponent {
    constructor(utilitiesService, storeService, loginService, toastr) {
        this.utilitiesService = utilitiesService;
        this.storeService = storeService;
        this.loginService = loginService;
        this.toastr = toastr;
        this.endDay = '';
        this.startDay = '';
        this.category = '';
        this.store = '';
        this.searchIsVisible = false;
        this.visibleDetail = false;
        this.selectionIndex = 1;
        this.productsTmp = [];
        this.detailProduct = {};
        this.productSearch = [];
        this.categoryList = [];
        this.storeList = [];
        this.product = [];
        this._color = 'light';
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
    }
    ngOnInit() {
        this.getStore();
    }
    getCategories() {
        for (const item of this.product) {
            if (!this.categoryList.includes(item.detail.category)) {
                this.categoryList.push(item.detail.category);
            }
        }
    }
    getStore() {
        if (this.storeService.product === undefined) {
            this.storeService.getStore(this.loginService.tokenSecret).subscribe(it => {
                this.storeService.product = it.data;
                this.product = it.data;
                this.setProduct();
            }, error => {
                this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                    timeOut: 7000,
                });
            });
        }
        else {
            this.product = this.storeService.product;
            this.setProduct();
        }
    }
    setProduct() {
        for (const item of this.product) {
            if (!this.storeList.includes(item.store)) {
                this.storeList.push(item.store);
            }
        }
        this.goItemPagination(1, this.product);
        this.getCategories();
    }
    goItemPagination(count, data) {
        this.visibleDetail = false;
        data = !this.searchIsVisible ? this.product : this.productSearch;
        const paginate = this.utilitiesService.paginate(data.length, count, 5, 5);
        if (count < 1 || count > paginate.totalPages) {
            return;
        }
        this.selectionIndex = count;
        this.productsTmp = new Array();
        for (let i = paginate.startIndex; i <= paginate.endIndex; i++) {
            this.productsTmp.push(data[i]);
        }
    }
    onChangeEvent(event) {
        const text = event.target.value.toString().toLowerCase();
        this.store = '';
        this.category = '';
        if (text.length < 0) {
            this.searchIsVisible = false;
            this.productSearch = [];
            this.goItemPagination(this.selectionIndex, this.product);
            return;
        }
        this.searchIsVisible = true;
        const result = this.product.filter(it => it.importer.toString().toLowerCase().includes(text) ||
            it.store.toString().toLowerCase().includes(text) ||
            it.product.toString().toLowerCase().includes(text));
        this.productSearch = result;
        this.productsTmp = new Array();
        this.selectionIndex = 1;
        this.goItemPagination(this.selectionIndex, result);
    }
    checkDetailProduct(index) {
        this.visibleDetail = true;
        this.detailProduct = !this.searchIsVisible ? this.product[index].detail : this.productSearch[index].detail;
    }
    search() {
        if (this.store === '' && this.category === '' && this.startDay === '' && this.endDay === '') {
            return;
        }
        const result = this.product.filter(it => it.store.toString().toLowerCase() === this.store.toLowerCase() ||
            it.detail.category.toString().toLowerCase() === this.category.toLowerCase().trim()
            || (this.startDay.length > 0 && this.endDay.length === 0 &&
                this.utilitiesService.conversionDate(new Date(this.startDay), it.detail.expiration))
            || (this.endDay.length > 0 && this.startDay.length === 0 &&
                this.utilitiesService.conversionDate(new Date(this.endDay), it.detail.expiration))
            || (this.endDay.length > 0 && this.startDay.length > 0 &&
                this.utilitiesService.betweenDate(new Date(this.startDay), new Date(this.endDay), it.detail.expiration)));
        this.searchIsVisible = true;
        this.productSearch = result;
        this.productsTmp = new Array();
        this.selectionIndex = 1;
        this.goItemPagination(this.selectionIndex, result);
    }
    clean() {
        this.store = '';
        this.category = '';
        this.startDay = '';
        this.endDay = '';
        this.searchIsVisible = false;
        this.productSearch = [];
        this.goItemPagination(this.selectionIndex, this.product);
    }
    convertDate(value) {
        return new Date(this.utilitiesService.changeFormatDate(value));
    }
    checkExpiration(value) {
        return !this.utilitiesService.validatorDate(this.convertDate(value), 3);
    }
};
__decorate([
    Input()
], CardTableComponent.prototype, "color", null);
CardTableComponent = __decorate([
    Component({
        selector: 'app-card-table',
        templateUrl: './card-table.component.html',
    })
], CardTableComponent);
export { CardTableComponent };
//# sourceMappingURL=card-table.component.js.map