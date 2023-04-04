import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LogisticExampleComponent = class LogisticExampleComponent {
    constructor(utilitiesService, orderService, loginService, toastr) {
        this.utilitiesService = utilitiesService;
        this.orderService = orderService;
        this.loginService = loginService;
        this.toastr = toastr;
        this.state = '';
        this.searchIsVisible = false;
        this.visibleDetail = false;
        this.selectionIndex = 1;
        this.productsTmp = [];
        this.detailProduct = [];
        this.drivers = [];
        this.productSearch = [];
        this.categoryList = [];
        this.stateList = ['SELECT OPTION', 'PENDING', 'PROCESSED', 'CANCELED', 'EXECUTING'];
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
        this.getOrders();
        this.getDriver();
    }
    getCategories() {
        for (const item of this.product) {
            if (!this.categoryList.includes(item.state)) {
                this.categoryList.push(item.state);
            }
        }
    }
    getDriver() {
        this.orderService.getDriver(this.loginService.tokenSecret).subscribe(it => {
            this.drivers = it.data;
        }, error => {
            this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                timeOut: 7000,
            });
        });
    }
    getOrders() {
        if (this.orderService.orders === undefined) {
            this.orderService.getOrders(this.loginService.tokenSecret).subscribe(it => {
                this.orderService.orders = it.data;
                this.product = it.data;
                this.setProduct();
            }, error => {
                this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                    timeOut: 7000,
                });
            });
        }
        else {
            this.product = this.orderService.orders;
            this.setProduct();
        }
    }
    setProduct() {
        for (const item of this.product) {
            if (!this.storeList.includes(item.name)) {
                this.storeList.push(item.name);
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
        this.state = '';
        if (text.length < 0) {
            this.searchIsVisible = false;
            this.productSearch = [];
            this.goItemPagination(this.selectionIndex, this.product);
            return;
        }
        this.searchIsVisible = true;
        const result = this.product.filter(it => it.idOrder.toString() === text ||
            it.name.toString().toLowerCase().includes(text) ||
            it.state.toString().toLowerCase().includes(text) ||
            it.address.toString().toLowerCase().includes(text) ||
            it.phone.toString().toLowerCase().includes(text));
        this.productSearch = result;
        this.productsTmp = new Array();
        this.selectionIndex = 1;
        this.goItemPagination(this.selectionIndex, result);
    }
    checkDetailProduct(index) {
        const store = Object.assign({}, this.productsTmp[index]);
        if (!this.detailProduct.some(elem => elem === store)) {
            this.detailProduct.push(store);
        }
    }
    search() {
        if (this.state === '') {
            return;
        }
        const result = this.product.filter(it => it.state.toString().toLowerCase() === this.state.toLowerCase());
        this.searchIsVisible = true;
        this.productSearch = result;
        this.productsTmp = new Array();
        this.selectionIndex = 1;
        this.goItemPagination(this.selectionIndex, result);
    }
    clean() {
        this.state = '';
        this.searchIsVisible = false;
        this.productSearch = [];
        this.goItemPagination(this.selectionIndex, this.product);
    }
    orderClear() {
        this.detailProduct = [];
    }
    getState(state) {
        const clone = Object.assign([], this.stateList);
        const index = clone.indexOf(state);
        clone.splice(index, 1);
        return clone;
    }
    onChangeState(event, store) {
        store.state = event.target.value;
    }
    onchangeDriver(event, store) {
        if () {
        }
        store.driver = event.target.value;
    }
    processOrder() {
        if (this.detailProduct.length === 0) {
            this.toastr.error('Debe selecionar alguna orden con su estados y conductor', 'Error', {
                timeOut: 7000,
            });
        }
        this.orderService.updateOrders(this.loginService.tokenSecret, this.detailProduct).subscribe(it => {
        }, error => {
            this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
                timeOut: 7000,
            });
        });
    }
};
__decorate([
    Input()
], LogisticExampleComponent.prototype, "color", null);
LogisticExampleComponent = __decorate([
    Component({
        selector: 'app-logistic-example',
        templateUrl: './logistic-example.component.html',
    })
], LogisticExampleComponent);
export { LogisticExampleComponent };
//# sourceMappingURL=logistic-example.component.js.map