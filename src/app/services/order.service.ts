import {Injectable, isDevMode} from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import { environmentDev} from '../../environments/environment.dev';
import {environmentProd} from '../../environments/environment.prod';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL_SERVICES  = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
  private _orders: any = undefined;

  constructor(private communicatorService: CommunicatorService) { }

  getOrders(token: string): Observable<any>  {
    return this.communicatorService.http_get( this.URL_SERVICES + 'ORDER/getOrder/', token);
  }

  getDriver(token: string): Observable<any>  {
    return this.communicatorService.http_get( this.URL_SERVICES + 'ORDER/getDriver/', token);
  }

  updateOrders(token: string, orders: []): Observable<any>  {
    return this.communicatorService.http_put( this.URL_SERVICES + 'ORDER/updateOrder/', token, orders);
  }

  get orders(): any {
    return this._orders;
  }

  set orders(value: any) {
    this._orders = value;
  }
}
