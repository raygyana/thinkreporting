import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { CustomModalPopUpService } from '../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from '../../component/custom-modal-pop-up/custom-modal-pop-up.model';
declare var $: any;

import { GlobalProcessRoutingService } from '../../core/services';
import { Subscription } from 'rxjs';

import { SessionObject, Utils, ProjectUtils } from '../../core/shared/index';
import { BaseService } from '../../core/base/base.service';
import { GuardService } from '../../core/guard/guard.service';
@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent implements OnInit {
  newProcessbasicSetting: any;
  currentMenu: any;
  subscription: Subscription;
  showHidePopup: any = false;
  referenceID: any;
  AlertType: any;
  pathArr = [];
  moduleSeleted = 0;
  refid: any;
  customerMenu = [
    {
      label: 'Customer Search',
      link: '/pages/customer/cs',
      icon: 'icon2',
      enable: true
    }, {
      label: 'Add Customer',
      link: '/pages/customer/add',
      icon: 'icon3',
      enable: true
    }, {
      label: 'Document Reference',
      link: '/pages/customer',
      icon: 'icon6',
      enable: true
    }, {
      label: 'Agency',
      link: '/pages/customer/agency',
      icon: 'icon7',
      enable: true
    }
  ];

  processmenuitem = [
    {
      label: 'Processes',
      link: '/pages/process',
      icon: 'icon5'
    }, {
      label: 'Create New',
      link: '/pages/new',
      icon: 'icon1'
    }, {
      label: 'Job Queue',
      link: '/pages/process',
      icon: 'icon6'
    }, {
      label: 'Initialize Day End ',
      link: '/pages/initialize_day_end',
      icon: 'icon7'
    }, {
      label: 'Extract Filter',
      link: '/pages/extract_filter',
      icon: 'icon8'
    }, {
      label: 'Output',
      link: '/pages/output',
      icon: 'icon9'
    }, {
      label: 'Renewal',
      link: '/pages/renewal_output',
      icon: 'icon10'
    }, {
      label: 'Promotions',
      link: '/pages/promotions_output',
      icon: 'icon11'
    }, {
      label: 'Billing',
      link: '/pages/billing_output',
      icon: 'icon12'
    }, {
      label: 'Accounting Reconciliation',
      link: '/pages/accounting_reconciliation_output',
      icon: 'icon13'
    }, {
      label: 'Sort',
      link: '/pages/sort',
      icon: 'icon14'
    },
    {
      label: 'Nth',
      link: '/pages/nth',
      icon: 'icon15'
    }, {
      label: 'Queue',
      link: '/pages/queue',
      icon: 'icon16'
    }, {
      label: 'Cleanup',
      link: '/pages/cleanup_output',
      icon: 'icon17'
    }

  ];

  thinkMenu = [
    {
      label: './assets/images/customer.png',
      link: 'customer'
    }, {
      label: './assets/images/batch.png',
      link: 'process'

    }, {
      label: './assets/images/import.png',
      link: 'process'
    }, {
      label: './assets/images/inventory.png',
      link: 'process'
    }, {
      label: './assets/images/job.png',
      link: 'process'
    }, {
      label: './assets/images/process.png',
      link: 'process'
    }, {
      label: './assets/images/report.png',
      link: 'process'
    }, {
      label: './assets/images/setup.png',
      link: 'process'
    }
  ];




  constructor(
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private globalProcessRoutingService: GlobalProcessRoutingService,
    protected baseService: BaseService,
    private grdSer: GuardService
  ) {

    router.events.subscribe((val) => {
      this.findURLAndsetMenu();
    });


  }
  setMenu(module) {
    if (module === 'process') {
      this.moduleSeleted = 5;
      this.currentMenu = this.processmenuitem;
    } else {
      this.moduleSeleted = 0;
      this.currentMenu = this.customerMenu;
    }

  }
  findURLAndsetMenu() {
    // const currentURL = '' + window.location;
    // console.log('window.location.', window.location);
    // Utils.getModuleName();
    this.setMenu(Utils.getModuleName());
    // if (currentURL.indexOf('/customer') !== -1) {

    //   this.setMenu('customer');
    // } else {
    //   this.setMenu('process');
    // }
  }

  ngOnInit() {
    this.checkRefIDExit();
    this.createReseDataPopoup();

    $('[data-toggle="tooltip"]').tooltip();
    this.baseService
      .subject.subscribe((data) => {
        console.log('subscribe>ref id____________________- ');
        this.referenceID = data.text.ref;
        console.log('subscribe>ref id ');
      });
  }
  openLink(link) {
    if (link === '/pages/new') {
      this.showNewProcessPopUp();
    } else {
      const refIdObj = SessionObject.getRefID();
      if (this.checkSessionObject(refIdObj)) {
        if (link === '/pages/customer') {
          this.router.navigate(['/pages/customer/cs']);
        }
      }
      this.router.navigate([link]);
    }
  }
  checkRefIDExit() {
    const refIdObj = SessionObject.getRefID();
    if (this.checkSessionObject(refIdObj)) {
      this.referenceID = refIdObj.documentReferenceDialogue;
    }
  }

  openModule(link) {
    const fullLink = '/pages/' + link;
    this.router.navigate([fullLink]);
    this.setMenu(link);

  }
  createReseDataPopoup() {
    this.newProcessbasicSetting = new CustomModalPopUpModel();
    this.newProcessbasicSetting.id = 'NewProcess';
    this.newProcessbasicSetting.title = 'New Process';
    this.newProcessbasicSetting.noButtons = true;
    this.newProcessbasicSetting.upperCross = true;
    this.newProcessbasicSetting.large = false;
  }

  showNewProcessPopUp() {
    this.customModalPopService.show(this.newProcessbasicSetting);
  }
  logout() {
    // this.baseService.clearMessage();
    localStorage.removeItem('UserDetails');
    this.router.navigate(['/']);

  }
  myChangeHandler(value: any) {
    this.pathArr = [];
    this.pathArr.push(value);
  }
  clickEvent(elm) {
    elm.click();
  }

  okClick() {
    this.router.navigate(this.pathArr);
    this.clickEvent(document.getElementsByClassName('crossIcon')[0]);

  }
  checkSessionObject(sessionObject: any) {
    if ((null !== sessionObject)
      && (sessionObject.documentReferenceDialogue !== undefined)
      && (sessionObject.documentReferenceDialogue !== '0')
    ) {
      return true;
    } else {
      return false;
    }


  }

  onClickThinkLogo() {
    this.grdSer.navigateToLogin();
  }

}



















