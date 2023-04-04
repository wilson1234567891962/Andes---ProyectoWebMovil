import {Injectable, isDevMode} from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import { environmentDev} from '../../environments/environment.dev';
import {environmentProd} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL_SERVICES  = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
  private _product: any = undefined;

  constructor(private communicatorService: CommunicatorService) { }

  getStore(token: string): Observable<any>  {
    return this.communicatorService.http_get( this.URL_SERVICES + 'STORE/getStore/', token);
  }

  get product(): any {
    return this._product;
  }

  set product(value: any) {
    this._product = value;
  }
}
