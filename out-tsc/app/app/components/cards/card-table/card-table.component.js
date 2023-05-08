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
        this.client = [];
        this.clientSelection = null;
        this.indexSelection = 0;
        this.amountSelection = 0;
        this._color = 'light';
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
    }
    ngOnInit() {
        this.getClient();
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
        const result = this.product.filter(it => it.product.toString().toLowerCase().includes(text));
        this.productSearch = result;
        this.productsTmp = new Array();
        this.selectionIndex = 1;
        this.goItemPagination(this.selectionIndex, result);
    }
    onChangeAmountEvent(event) {
        this.amountSelection = Number(event.target.value.toString());
    }
    checkDetailProduct(index) {
        this.visibleDetail = true;
        this.detailProduct = this.productsTmp[index].detail;
        this.indexSelection = index;
    }
    search() {
        if (this.store === '') {
            return;
        }
        const result = this.product.filter(it => it.product.toString().toLowerCase() === this.store.toLowerCase());
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
    processOrder() {
        this.detailProduct = this.productsTmp[this.indexSelection];
        if (this.amountSelection > this.detailProduct.amount) {
        }
    }
    orderClear() {
        this.visibleDetail = false;
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