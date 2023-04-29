import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {UtilitiesService} from '../../../services/utilities.service';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
})
export class CardSettingsComponent implements OnInit {
  languageList = ['ESPAÑOL', 'INGLES']
  language = '';
  email = '';
  constructor(private loginService: LoginService, private toastr: ToastrService,public utilitiesService: UtilitiesService) {
  }

  ngOnInit(): void {
    this.email = this.loginService.user;
    this.language = localStorage.getItem('LANGUAGE') ? localStorage.getItem('LANGUAGE') : 'ESPAÑOL' ;
    console.log(this.language);
  }

  saveSetting(){
    localStorage.setItem('LANGUAGE', this.language);
    this.toastr.info('Success', 'Info', {
      timeOut: 7000,
    });
  }
}
