import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

  @Input() private _loader= false;

  constructor() { }

  ngOnInit(): void {
  }


  get loader(): boolean {
    return this._loader;
  }

  set loader(value: boolean) {
    this._loader = value;
  }
}
