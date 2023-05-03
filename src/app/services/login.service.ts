import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environmentProd} from '../../environments/environment.prod';
import {environmentDev} from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _user = '';
  private _password = '';
  private _tokenSecret = '';
  private _rol = '';
  private _idUser = '';
  private URL_SERVICES  = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
  constructor(private communicatorService: CommunicatorService) { }

  login(): Observable<any>  {
    const body: any = {
      email: this.user,
      password: this.password
    };
    return this.communicatorService.http_post(this.URL_SERVICES+ 'login/', body);
  }

  register(email, password): Observable<any>  {
    const body: any = {
      email,
      password
    };
    return this.communicatorService.http_post(this.URL_SERVICES + 'register/', body);
  }

  forgetPassword(email): Observable<any>  {
    const body: any = {
      email
    };
    return this.communicatorService.http_post(this.URL_SERVICES + 'forgetPassword/', body);
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get tokenSecret(): string {
    return this._tokenSecret;
  }

  set tokenSecret(value: string) {
    this._tokenSecret = value;
  }

  get rol(): string {
    return this._rol;
  }

  set rol(value: string) {
    this._rol = value;
  }


  get idUser(): string {
    return this._idUser;
  }

  set idUser(value: string) {
    this._idUser = value;
  }
}
