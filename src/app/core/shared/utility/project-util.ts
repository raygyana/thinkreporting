import { Utils } from './utils';
import { ColDef } from 'ag-grid';
import { AgChecboxHeaderComponent } from '../../../component/ag-component/ag-checbox-header/ag-checbox-header.component';

export class ProjectUtils extends Utils {
      public static GRIDWIDTH = window.screen.availWidth;
      public static idCount = 0;
      public static getSessionObject() {
            return null;
      }
      public static decimaltwoplace(value) {
            if (value.value
                  === null) { return ''; }
            return parseFloat(value.value).toFixed(2);
      }

      public static ag_SetWidth(perc: number) {
            return (ProjectUtils.GRIDWIDTH * perc) / 100;
      }

      public static selectsymb(value: any) {
            return '<i class="fa fa-ellipsis-v text-primary"></i>';
      }
      public static selecticon(value: any) {
            return '<input type="checkbox" style="zoom: 1.5" data-dismiss="modal">';
      }
      public static selecticonredio(name: string) {


            return function (value: any) {
                  const id = 'radio-' + (++ProjectUtils.idCount);
                  return `<div class="custom-control custom-radio">
            <input type="radio" id="${id}" name="${name}" class="custom-control-input">
            <label style="display:block" class="custom-control-label" for="${id}"></label>
          </div>`;
            };
      }

      public static selecticon1(key: string) {
            return function (value: any) {
                  const id = value['data'][key];
                  return `<div class="custom-control custom-checkbox">
                  <input type="checkbox" ${value['data'].select ? 'checked' : ''} class="custom-control-input" id="${id}"
                  data-dismiss="modal">
                  <label style="display:block" class="custom-control-label" for="${id}"></label>
                </div>`;

            };
      }

      public static editicon(value: any) {
            return '<a href="javascript:;"><i class="fa fa-edit" style="font-size:16px;"></i></a>';
      }

      public static historyicon(value: any) {
            return '<a href="javascript:;"><i class="fa fa-history" style="font-size:16px;"></i></a>';
      }

      public static editSelectButton(value: any) {
            return `<i class="fa fa-edit iconColor mr-2" >edit</i>
            <i class="fa fa-check-square-o iconColor" >Select</i>`;
      }
      public static editDeleteButton(value: any) {
            return `<a href="javascript:;" style="text-decoration: none;"><i class="fa fa-edit" ></i>&nbsp;&nbsp;&nbsp;
            <i class="fa fa-trash" ></i></a>`;
      }

      public static deleteButton(value: any) {
            return `<a href="javascript:;" style="text-decoration: none;">
            <i class="fa fa-trash" ></i></a>`;
      }

      // public static setUnpaidOrderSelected(value: any) {

      //       if (value.data['netBaseAmount'] > '0') {
      //             return `<a href="javascript:;" style="text-decoration: none;"><input type="checkbox" checked></a>`;
      //       } else {
      //             return `<a href="javascript:;" style="text-decoration: none;"><input type="checkbox" readonly></a>`;
      //       }

      // }


      public static AddEditSelect(colDef: Array<ColDef>, header: string): Array<ColDef> {

            const edtSel: Array<ColDef> = [{
                  headerName: header,
                  cellRenderer: ProjectUtils.editSelectButton
            }];
            colDef = edtSel.concat(colDef);
            return colDef;
      }
      public static AddEditDelect(colDef: Array<ColDef>, header: string): Array<ColDef> {

            const edtSel: Array<ColDef> = [{
                  headerName: header,
                  cellRenderer: ProjectUtils.editDeleteButton
            }];
            colDef = edtSel.concat(colDef);
            return colDef;
      }
      public static AddSelectCheckbox(colDef: Array<ColDef>, header: string): Array<ColDef> {

            const chkSel: Array<ColDef> | any = [{
                  headerName: header,
                  field: 'checkbox',
                  cellRenderer: 'AgCheckBoxComponent',
                  headerComponentFramework: AgChecboxHeaderComponent
            }];
            colDef = chkSel.concat(colDef);
            return colDef;
      }



      public static setSelect(value) {
            let anchor;
            if (value.node.data.is_reversed === 1) {
                  anchor = '<input type="checkbox" disabled id=""  checked>';
            } else if (value.node.data.is_reversed === 0) {
                  anchor = '<input type="checkbox" id="" disabled>';
            }
            return anchor;
      }

      public static numberFormatter(parm) {
            if (parm !== undefined) {
                  const argu = (parm.value !== undefined) ? parm.value : parm;
                  if (argu === 0) { return 'Customer Service'; }
                  if (argu === 1) { return 'Import'; }

                  if (argu === 2) { return 'Batch'; }

                  if (argu === 3) { return 'Day End'; }

                  if (argu === 4) { return 'Internet'; }
            }

      }

      public static tableNumberFormatter(parm) {
            if (parm !== undefined) {
                  const argu = (parm.value !== undefined) ? parm.value : parm;
                  if (argu === 0) { return 'Customer'; }
                  if (argu === 1) { return 'Customer Address'; }

                  if (argu === 2) { return 'Customer Prospect'; }

                  if (argu === 3) { return 'Order Item'; }

                  if (argu === 4) { return 'Payment'; }
                  if (argu === 4) { return 'Demographic'; }
                  if (argu === 6) { return 'Order Item Amount Break'; }
                  if (argu === 7) { return 'Cust. Addr. Distr'; }
                  if (argu === 8) { return 'Subscrip'; }
                  if (argu === 9) { return 'Order Item Install'; }
                  if (argu === 10) { return 'Payment Account'; }
                  if (argu === 11) { return 'Service'; }

            }

      }


      public static numericValidation(e: any) {  // to be fire on keydown

            let input;
            if (e.which > 95 && e.which < 107) {
                  return true;
            } else if ((e.which > 34 && e.which < 38) || e.which === 39 || e.which === 46) {
                  return true;
            } else if (e.metaKey || e.ctrlKey) {
                  return true;
            } else if (e.which === 32) {
                  return false;
            } else if (e.which === 0) {
                  return true;
            } else if (e.which < 33) {
                  return true;
            }

            input = String.fromCharCode(e.which);
            return !!/[\d\s]/.test(input);
      }

      public static editNumberFormatter(parm) {
            if (parm !== undefined) {
                  const argu = (parm.value !== undefined) ? parm.value : parm;
                  if (argu === 0) { return 'Add'; }
                  if (argu === 1) { return 'Edited'; }
            }

      }

      public static changeAddType(parm) {
            const changeType = parm.data['changeType'];
            if (changeType === '1') {
                  return 'TEMP';
            } else {
                  return 'FUTURE';
            }
      }

      public static removeTimeStamp(param) {
            const value = param.value;
            return value.split(' ')[0];
      }
}
