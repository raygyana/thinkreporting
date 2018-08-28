import { DatePipe } from '@angular/common';

export class DateUtil {
      private datePipe: DatePipe = new DatePipe('en-US');

      constructor() {
      }

      TempdateFormate(date: string, format = 'dd/MM/yyyy'): string {
            const transformedDate = this.datePipe.transform(date, format);
            return transformedDate;
      }

      dateFormate(date: string, format = 'MMM dd, yyyy hh:mm:ss a'): string {
            const transformedDate = this.datePipe.transform(date, format);
            return transformedDate;
      }

      convertKeyToDate(obj: any, key: string, format = 'MMM dd, yyyy hh:mm:ss a'): Object {
            const transformedDate = this.dateFormate(obj[key]);
            return transformedDate;
      }

      convertArrayKeytoDate(arr: Array<any>, key: string, format = 'MMM dd, yyyy hh:mm:ss a'): void {
            const outArr = arr.forEach((item) => {
                  item[key] = this.convertKeyToDate(item, key, format);
            });
      }

      //  Jul 15, 2010 9: 49: 52 AM
}
