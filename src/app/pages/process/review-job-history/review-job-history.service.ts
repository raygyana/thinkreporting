import { Injectable } from '@angular/core';
import { ProcessUrls } from '../../../core/shared';
import { HttpService } from '../../../core/services/http.service';
import { BaseService } from '../../../core/base/index';
import { Observable } from 'rxjs';



@Injectable()
export class ReviewJobHistoryService extends BaseService {
      constructor(protected httpService: HttpService) {
            super(httpService);
      }

      loadJson(api): Observable<any> {
            return this.getjson(api);
      }

}

