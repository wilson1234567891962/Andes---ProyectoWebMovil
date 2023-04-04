import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  state = false;
  constructor() { }

  setStateLoading(state: boolean): void {
    this.state = state;
  }

  getStateLoading(): boolean {
    return this.state;
  }
}
