import {Injectable, isDevMode} from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import { environmentDev} from '../../environments/environment.dev';
import {environmentProd} from '../../environments/environment.prod';
import {DeliveryPurchaseModel} from '../model/DeliveryPurchaseModel';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL_SERVICES  = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
  private _product: any = undefined;
  private _client: any = undefined;

  constructor(private communicatorService: CommunicatorService) { }

  getStore(token: string): Observable<any>  {
    return this.communicatorService.http_get( this.URL_SERVICES + 'STORE/getStore/', token);
  }

  getClients(token: string): Observable<any>  {
    return this.communicatorService.http_get( this.URL_SERVICES + 'ORDER/getClient/', token);
  }

  sendDeliveryPurchaseEntity(token: string, deliveryPurchaseModel: DeliveryPurchaseModel): Observable<any>  {
    const body: any = deliveryPurchaseModel;
    return this.communicatorService.http_post( this.URL_SERVICES + 'ORDER/sendDeliveryPurchaseEntity/',body , token);
  }

  get product(): any {
    return this._product;
  }

  set product(value: any) {
    this._product = value;
  }

  get client(): any {
    return this._client;
  }

  set client(value: any) {
    this._client = value;
  }
}
