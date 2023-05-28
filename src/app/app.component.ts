import { Component } from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-dashboard-page';
  constructor(private loadingService: LoadingService ) {

  }
  
  
  getStateLoading(): boolean {
    return this.loadingService.getStateLoading();
  }
}
