import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BaseComponent } from '../../../../core/base/base.component';
import { BaseService } from '../../../../core/base/base.service';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel, TabsComponent, TabComponent, } from '../../../../component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SessionObject } from '../../../../core/shared/index';
import { ConstantService } from '../../../../core/services/constants';
@Component({
  selector: 'app-agency-detail-dashboard',
  templateUrl: './agency-detail-dashboard.component.html',
  styleUrls: ['./agency-detail-dashboard.component.css']
})
export class AgencyDetailDashboardComponent extends BaseComponent implements OnInit {
  CUSTOMER_REPORTS = 'CUSTOMER_REPORTS';
  ORDER_REPORTS = 'ORDER_REPORTS';
  PAYMENT_REPORTS = 'PAYMENT_REPORTS';
  NOTES_REPORTS = 'NOTES_REPORTS';
  ATTACHMENT_REPORTS = 'ATTACHMENT_REPORTS';
  CUSTOER_HISTORY_REPORTS = 'CUSTOER_HISTORY_REPORTS';
  @ViewChild(TabsComponent) tabsComponent;
  @ViewChild('custaddorder') custaddorderTemplate;
  customerId: any;
  selectTabName: any = '';
  loadNewData: Subject<any> = new Subject();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    public constSer: ConstantService
    //  protected customModalPopService: CustomModalPopUpService
  ) {

    super(baseService, router);
  }

  ngOnInit() {
    const tabDetails = SessionObject.getopenTab();
    if (tabDetails && tabDetails.openTab) {
      this.selectTabName = tabDetails.openTab;
      SessionObject.removeOpenTab();
    }
  }
  setSelectedTab(evt) {
    console.log('setSelectedTab:', evt);
    this.selectTabName = evt;
  }


  // openTabs(tabid: any) {

  //   this.tabsComponent.closeActiveTab();
  //   setTimeout(() => {
  //     console.log('tabid8888888888888888888', tabid);
  //     this.tabsComponent.openTab('Add Order-' + tabid,
  //       this.custaddorderTemplate, {}, true, tabid);
  //   }, 100);


  // }

  // openAddOrderTab(value: any): void {
  //   this.customerId = value;
  //   this.loadNewData.next(value);
  //   console.log('tabid8888888888888888888', value);
  //   this.openTabs(value);

  // }



}
