import {Component, OnInit, Input} from '@angular/core';
import {UtilitiesService} from '../../../services/utilities.service';
import {StoreService} from '../../../services/store.service';
import {LoginService} from '../../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {DeliveryPurchaseModel} from '../../../model/DeliveryPurchaseModel';
import {error} from 'protractor';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit {
  endDay = '';
  startDay = '';
  category = '';
  store = '';
  searchIsVisible = false;
  visibleDetail = false;
  selectionIndex = 1;
  productsTmp = [];
  detailProduct: any = {};
  productSearch = [];
  categoryList = [];
  storeList = [];
  product = [];
  client = [];
  clientSelection: any = null;
  indexSelection = 0;
  amountSelection = 0;
  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';

  constructor(public utilitiesService: UtilitiesService, private storeService: StoreService, private loginService: LoginService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getClientService();
    this.getStore();
  }

  getCategories(): void {
    for (const item of this.product) {
      if (!this.categoryList.includes(item.detail.category)) {
        this.categoryList.push(item.detail.category);
      }
    }
  }

  getClientService(): void {
    if (this.storeService.client === undefined) {
      this.storeService.getClients(this.loginService.tokenSecret).subscribe(it => {
        this.storeService.client = it.data;
        this.client = it.data;
      }, error => {
        this.toastr.error(error.error.code +': ' +  error.error.message, 'Error', {
          timeOut: 7000,
        });
      })

    } else {
      this.client = this.storeService.client;
    }
  }


  getStore(): void {
      this.storeService.getStore(this.loginService.tokenSecret).subscribe(it => {
        this.storeService.product = it.data;
        this.product = it.data;
        this.setProduct();
      }, error => {
        this.toastr.error(error.error.code +': ' +  error.error.message, 'Error', {
          timeOut: 7000,
        });
      })
  }

  setProduct(): void {
    for (const item of this.product) {
      if (!this.storeList.includes(item.store)) {
        this.storeList.push(item.store);
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
    this.store = '';
    this.category = '';
    if (text.length < 0) {
      this.searchIsVisible = false;
      this.productSearch = [];
      this.goItemPagination(this.selectionIndex, this.product);
      return;
    }
    this.searchIsVisible = true;
    const result = this.product.filter(it =>
      it.product.toString().toLowerCase().includes(text));
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  onChangeAmountEvent(event: any) {
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
    const result = this.product.filter(it =>
      it.product.toString().toLowerCase() === this.store.toLowerCase()
    );
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
    if(this.amountSelection > this.detailProduct.amount || this.amountSelection === 0 ){
      this.toastr.error('La cantidad digitada no puede ser mayor a la disponible o debe ingresar una cantidad', 'Error', {
        timeOut: 7000,
      });
      return;
    }

    if(!this.clientSelection ){
      this.toastr.error('Debe seleccionar un cliente', 'Error', {
        timeOut: 7000,
      });
      return;
    }

    this.storeService.sendDeliveryPurchaseEntity(this.loginService.tokenSecret,
      new DeliveryPurchaseModel(Number(this.detailProduct.id),
        Number(this.amountSelection), Number(this.clientSelection), Number(this.loginService.idUser)))
      .subscribe(it =>{
          this.toastr.success(it.data.code +': ' +  it.data.message, 'Info', {
             timeOut: 7000,
        })
        this.visibleDetail = false;
        this.getClientService();
        this.getStore();

      }, tes => {
        this.toastr.error(tes.error.code + ': ' + tes.error.message, 'Error', {
          timeOut: 7000,
        });
      });
  }

  orderClear() {
    this.visibleDetail = false;
  }
}
