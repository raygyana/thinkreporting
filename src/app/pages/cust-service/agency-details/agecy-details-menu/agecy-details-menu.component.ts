import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agecy-details-menu',
  templateUrl: './agecy-details-menu.component.html',
  styleUrls: ['./agecy-details-menu.component.css']
})
export class AgecyDetailsMenuComponent implements OnInit {
  route: any = '/pages/customer/agency-details';
  constructor(
    protected router: Router

  ) { }

  ngOnInit() {
  }




}
