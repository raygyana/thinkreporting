import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownWithDescriptionModel, DropdownWithDescriptionComponent } from '../../../component/dropdown-with-description';
import { CustomerServicesUrls } from '../../../core/shared/constant';
import { Subject } from 'rxjs';
import { BaseComponent } from '../../../core/base/index';
import { BaseService } from '../../../core/base';
import { LoaderService } from '../../../component/loader/loader.service';
import { SessionObject } from '../../../core/shared';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  // duplicateCustomerListEvent(){

  // }

}
