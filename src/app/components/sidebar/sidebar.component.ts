import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from '../../services/utilities.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';
  constructor(public utilitiesService:UtilitiesService) {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
