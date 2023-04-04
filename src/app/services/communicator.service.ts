import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class CommunicatorService {

  private isShowLoad = false;
  private counterLoading = 0;
  private requests: boolean[] = [];

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
  }

  http_post(url: string, body: any, tokenService?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: (tokenService === null || tokenService === undefined) ? '' :  tokenService
    });
    this.showLoad();

    return this.http.post(url, body, { headers }).pipe(
      tap(
        () => {
          this.hideLoad();
        },
        error => {
          this.hideLoad();
          throwError(error);
        },
      ),
    );
  }

  http_get(url: string, tokenService?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: (tokenService === null || tokenService === undefined) ? '' :  tokenService
    });
    this.showLoad();

    return this.http.get(url, { headers }).pipe(
      tap(
        () => {
          this.hideLoad();
        },
        error => {
          this.hideLoad();
          throwError(error);
        },
      ),
    );
  }

  http_put(url: string, tokenService?: any, data?:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: (tokenService === null || tokenService === undefined) ? '' :  tokenService
    });
    this.showLoad();

    return this.http.put(url, data, { headers }).pipe(
      tap(
        () => {
          this.hideLoad();
        },
        error => {
          this.hideLoad();
          throwError(error);
        },
      ),
    );
  }

  private showLoad(): void {
    this.counterLoading++;
    if (this.isShowLoad) { return; }
    this.isShowLoad = true;
    this.loadingService.setStateLoading(true);
    this.requests.push(this.isShowLoad);
  }

  private hideLoad(): void {
    this.counterLoading--;
    this.requests.splice(0, 1);
    if (this.requests.length === 0 && this.counterLoading === 0) {
      this.isShowLoad = false;
      this.loadingService.setStateLoading(false);
    }
  }
}

export type WebRequestMethod =
  'GET' |
  'POST' |
  'PUT' |
  'DELETE' |
  'OPTIONS' |
  'HEAD' |
  'PATCH';

export interface IWebRequestOptions {
  method?: string;
  search?: string;
  params?: string | URLSearchParams;
  headers?: Headers | null;
  body?: any | {};
  withCredentials?: boolean | null;
  responseType?: XMLHttpRequestResponseType | null;
  op?: string;
}
