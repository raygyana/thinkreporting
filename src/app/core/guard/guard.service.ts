import { Injectable } from '@angular/core';
import { SessionObject, UserDetailsI } from '../shared/session-object';
import { Router } from '@angular/router';

@Injectable()

export class GuardService {


      constructor(
            private router: Router
      ) { }

      private getRefID(): string {
            const refId = SessionObject.getRefID();
            return refId && refId.documentReferenceDialogue;
      }

      private getToken(): string {
            const userDetail: UserDetailsI = SessionObject.getUserDetails();
            return userDetail && userDetail.Token;
      }

      isRefIdAvaible(): boolean {
            if (this.getRefID()) {
                  return true;
            } else {
                  return false;
            }
      }

      isTokenAvaible(): boolean {
            if (this.getToken()) {
                  return true;
            } else {
                  return false;
            }
      }

      navigateFromLogin() {
            if (this.getRefID() === '0') {
                  this.router.navigate(['/pages/customer']);
            } else {
                  this.router.navigate(['/pages/customer/cs']);
            }
      }

      navigateToLogin() {
            this.router.navigate(['']);
      }

}

