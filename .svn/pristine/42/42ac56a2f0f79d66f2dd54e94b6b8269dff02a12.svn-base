import { Injectable } from '@angular/core';

@Injectable()

export class NotesServices {
      constructor() {
      }

      getNonSearchModelParams(searchModel: any, dropdownValue: string, resultdata: Array<any>) {

            let record = null;
            if (dropdownValue === 'All') {
                  if (searchModel.noteType.value === 'Customer') {
                        record = resultdata[0].note_seq;
                  } else if (searchModel.noteType.value === 'Subscriptions') {
                        record = resultdata[0].subscrip_id + '-' + resultdata[0].note_seq;
                  } else if (searchModel.noteType.value === 'Order Items') {
                        record = resultdata[0].orderhdr_id + '-' + resultdata[0]
                              .order_item_seq + '-' + resultdata[0].note_seq;
                  } else if (searchModel.noteType.value === 'Payments') {
                        record = resultdata[0].payment_seq + '-' + resultdata[0].note_seq;
                  } else if (searchModel.noteType.value === 'Suspension') {
                        record = resultdata[0].orderhdr_id + '-' + resultdata[0]
                              .order_item_seq + '-' + resultdata[0].suspension_seq + '-' + resultdata[0].note_seq;
                  }
            } else if (searchModel.noteType.value === 'Customer') {
                  record = resultdata[0].customer_note_seq;
            } else if (searchModel.noteType.value === 'Subscriptions') {
                  record = resultdata[0].subscrip_id + '-' + resultdata[0].subscrip_note_seq;
            } else if (searchModel.noteType.value === 'Order Items') {
                  record = resultdata[0].orderhdr_id + '-' + resultdata[0].order_item_seq + '-' + resultdata[0].order_item_note_seq;
            } else if (searchModel.noteType.value === 'Payments') {
                  record = resultdata[0].payment_seq + '-' + resultdata[0].payment_note_seq;
            } else if (searchModel.noteType.value === 'Suspension') {
                  record = resultdata[0].orderhdr_id + '-' + resultdata[0]
                        .order_item_seq + '-' + resultdata[0].suspension_seq + '-' + resultdata[0].suspension_note_seq;
            }
            const obj = {
                  record: record
            };
            return obj;
      }

}

