import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-delivery-man',
  templateUrl: './delivery-man.component.html',
})
export class DeliveryManComponent implements OnInit {
  state = '';
  searchIsVisible = false;
  visibleDetail = false;
  selectionIndex = 1;
  productsTmp = [];
  detailProduct: any = [];
  drivers: any = [];
  productSearch = [];
  categoryList = [];
  stateList = ['PENDING', 'PROCESSED', 'CANCELED', 'EXECUTING'];
  storeList = [];
  product = [];
  listProduct: any = [];

  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';

  constructor(public utilitiesService: UtilitiesService, private orderService: OrderService, private loginService: LoginService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getOrders();
    this.getDriver();
  }

  getCategories(): void {
    for (const item of this.product) {
      if (!this.categoryList.includes(item.state)) {
        this.categoryList.push(item.state);
      }
    }
  }


  getDriver(): void {
    this.orderService.getDriver(this.loginService.tokenSecret).subscribe(it => {
      this.drivers = it.data;
    }, error => {
      this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
        timeOut: 7000,
      });
    })
  }

  getOrders(): void {
    this.orderService.getOrders(this.loginService.tokenSecret).subscribe(it => {
      this.orderService.orders = it.data;
      this.product = it.data;
      this.setProduct();
    }, error => {
      this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
        timeOut: 7000,
      });
    })
  }

  addElement(item: any): void {
    this.listProduct.push(item);
    this.toastr.success('Elemento agregado', 'Info', {
      timeOut: 3000,
    });
  }

  setProduct(): void {
    for (const item of this.product) {
      if (!this.storeList.includes(item.name)) {
        this.storeList.push(item.name);
      }
    }
    this.goItemPagination(1, this.product);
    this.getCategories()
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

  onChangeEvent(event: any) {
    const text = event.target.value.toString().toLowerCase();
    this.state = '';
    if (text.length < 0) {
      this.searchIsVisible = false;
      this.productSearch = [];
      this.goItemPagination(this.selectionIndex, this.product);
      return;
    }
    this.searchIsVisible = true;
    const result = this.product.filter(it =>
      it.idOrder.toString() === text ||
      it.name.toString().toLowerCase().includes(text) ||
      it.state.toString().toLowerCase().includes(text) ||
      it.address.toString().toLowerCase().includes(text) ||
      it.phone.toString().toLowerCase().includes(text)
    );
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  checkDetailProduct(index) {
    const store = { ...this.productsTmp[index] };
    const it = this.detailProduct.filter(data => data.idOrder === store.idOrder)
    if (it.length === 0) {
      this.detailProduct.push(store);
    }
  }

  updateOrders() {
    if (this.listProduct.length === 0) {
      this.toastr.error('Debe haber selecionado alguna orden para devolver', 'Error', {
        timeOut: 7000,
      });
      return;
    }
    for (const item of this.listProduct) {
      item.state = 'CANCELED'
      item.comment = 'CANCELED BY USER'
      delete item.driver;
    }
    this.orderService.updateOrders(this.loginService.tokenSecret, this.listProduct).subscribe(it => {
      this.toastr.success(it.data.code + ': ' + it.data.message, 'Info', {
        timeOut: 7000,
      });
      this.getOrders();
      this.listProduct.length = 0;
    }, error => {
      this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
        timeOut: 7000,
      });
    })
  }

  search() {
    if (this.state === '') {
      return;
    }
    const result = this.product.filter(it =>
      it.state.toString().toLowerCase() === this.state.toLowerCase()
    );
    this.searchIsVisible = true;
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  clean() {
    this.listProduct.length = 0;
  }

  orderClear() {
    this.detailProduct = [];
  }

  getState(state: string) {
    const clone = Object.assign([], this.stateList);
    const index = clone.indexOf(state)
    clone.splice(index, 1);
    return clone;
  }

  onChangeState(event: any, store: any) {
    if (event.target.value === 'DEFAULT') {
      return;
    }
    store.state = event.target.value;
  }

  onchangeDriver(event: any, store: any) {
    if (event.target.value === 'DEFAULT') {
      return;
    }
    store.driver = event.target.value;
  }

  processOrder() {
    if (this.detailProduct.length === 0) {
      this.toastr.error('Debe selecionar alguna orden con su estados y conductor', 'Error', {
        timeOut: 7000,
      });
      return;
    }

    let state = true;
    for (const item of this.detailProduct) {
      const purchases = this.product.filter(it => it.idOrder === it.idOrder)[0]
      if (item.driver === undefined || purchases.state === item.state) {
        state = false;
        break;
      }
    }

    if (!state) {
      this.toastr.error('Debe seleccionar el estado y conductor, adicional el estado no puede ser al actual', 'Error', {
        timeOut: 7000,
      });
      return;
    }

    this.orderService.updateOrders(this.loginService.tokenSecret, this.detailProduct).subscribe(it => {
      this.toastr.success(it.data.code + ': ' + it.data.message, 'Info', {
        timeOut: 7000,
      });
      this.getOrders();
      this.getDriver();
    }, error => {
      this.toastr.error(error.error.code + ': ' + error.error.message, 'Error', {
        timeOut: 7000,
      });
    })
  }
}
