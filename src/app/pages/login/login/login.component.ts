import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CustomerServicesUrls } from '../../../core/shared';
import { BaseComponent } from '../../../core/base/base.component';
import { SessionObject } from '../../../core/shared';
import { LoginModel, DocRefModel } from './login.model';
import { GuardService } from '../../../core/guard/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  NAME_LOGIN = 'LOGIN';
  NAME_DOCREF = 'DOCREF';
  loginMsg: any;
  loginModel: LoginModel;
  docRefModel: DocRefModel;
  username: any;
  password: any;

  constructor(
    protected router: Router,
    protected loginService: LoginService,
    private grdSer: GuardService
  ) {
    super(loginService, router);
  }
  xtBaseAfterViewInit() {
    this.addStyle(document.body, '#0072cf');
  }
  addStyle(elm: any, style) {
    elm.style.background = style;
  }

  initSearchModels() {
    this.loginModel = new LoginModel();
    this.docRefModel = new DocRefModel();

  }

  getServiceUrl(name: string) {
    if (name === this.NAME_LOGIN) {
      return CustomerServicesUrls.TK_CUSTOMER_LOGIN;
    } else if (name === this.NAME_DOCREF) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DATA;
    }
  }

  getSearchModel(name: string) {
    if (name === this.NAME_LOGIN) {
      return this.loginModel;
    } else if (name === this.NAME_DOCREF) {
      return this.docRefModel;
    }
  }

  onLogin() {
    this.showLoader();


    this.loadDataFromApi(this.NAME_LOGIN).subscribe((data) => {

      if (data.Status === 'OK') {
        SessionObject.setUserDetails({
          'userCode': data.userCode,
          'publisher': data.publisher,
          'Token': data.Token
        });
        this.loadDataFromApi1();
      } else if (data.Status === 'Error') {
        this.loginMsg = 'Invalid Username or Password';
        this.hideMsg();
      } else {
        this.loginMsg = 'Something went wrong....Please try again !!!';
        this.hideMsg();
      }

      this.hideLoader();
    });
  }


  private hideMsg() {
    setTimeout(() => {
      this.loginMsg = false;
    }, 3000);
  }

  loadDataFromApi1() {

    this.loadDataFromApi(this.NAME_DOCREF)
      .subscribe((element) => {

        console.log('DocumentReferenceListComponent>datafrom api::', element);
        SessionObject.setRefID({
          'documentReferenceId': (element.documentReferenceId === undefined) ? '0' : element.documentReferenceId,
          'documentReferenceDialogue': (element.documentReferenceDialogue === undefined) ? '0' : element.documentReferenceDialogue,
          'userCode': element.userCode
        });

        this.grdSer.navigateFromLogin();

        // if (element.documentReferenceDialogue === '0') {
        //   this.router.navigate(['/pages/customer']);
        // } else {
        //   this.router.navigate(['/pages/customer/cs']);
        // }


      });

    // const parm = '&fromRecord=1&totalRecord=10';
    // this.baseService.getDataFromAPI(CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DATA, parm).subscribe((data) => {
    //   console.log('DocumentReferenceListComponent>datafrom api::', data);
    //   SessionObject.setRefID({
    //     'documentReferenceId': (data.documentReferenceId === undefined) ? '0' : data.documentReferenceId,
    //     'documentReferenceDialogue':
    //       (data.documentReferenceDialogue === undefined) ? '0' : data.documentReferenceDialogue,
    //     'userCode': data.userCode
    //   });
    //   this.loader.hide('LoginLoader');
    //   if (data.documentReferenceDialogue === '0') {
    //     this.router.navigate(['/pages/customer']);
    //     // this.addStyle(document.body, '#ecebec');
    //   } else {
    //     this.router.navigate(['/pages/customer/cs']);
    //     // this.addStyle(document.body, '#ecebec');
    //   }
    // });
    // this.loader.hide('LoginLoader');
  }

}
