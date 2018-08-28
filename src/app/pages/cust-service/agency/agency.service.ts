import { Injectable } from '@angular/core';
import { ProcessUrls } from '../../../core/shared';
import { HttpService } from '../../../core/services/http.service';
import { BaseService } from '../../../core/base/index';
import { Observable } from 'rxjs';
import { GlobalPopupService } from '../../../component';



@Injectable()
export class AgencyService extends BaseService {
      constructor(protected httpService: HttpService,
            protected globalPupUp: GlobalPopupService) {
            super(httpService);
      }

      loadJson(api): Observable<any> {
            return this.getjson(api);
      }

}