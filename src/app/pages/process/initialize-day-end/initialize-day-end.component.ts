import { Component, OnInit } from '@angular/core';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { BaseService } from '../../../core/base';
import { BaseComponent } from '../../../core/base/base.component';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initialize-day-end',
  templateUrl: './initialize-day-end.component.html',
  styleUrls: ['./initialize-day-end.component.css']
})
export class InitializeDayEndComponent extends BaseComponent implements OnInit {

  dropDown: any;
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  dropdown: any;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.initDropdown();

  }

  ngOnInit() {
  }


  initDropdown() {

    this.basicSetting = new DropdownWithDescriptionModel();
    this.basicSetting.ListDisplayKeys = [{
      headerName: 'label',
      displayKey: 'key'
    }];
    this.basicSetting.displayKey = 'key';
    this.basicSetting.serviceUrl = 'https://mysocietyconnect.com/mps/cs/interval_unit_dropdown.json';
    this.basicSetting.valueTypeOrKey = 'key';

    this.basicSetting1 = new DropdownWithDescriptionModel();
    this.basicSetting1.ListDisplayKeys = [{
      headerName: 'Queue',
      displayKey: 'job'
    },
    {
      headerName: 'Description',
      displayKey: 'job'
    }];
    this.basicSetting1.descriptionKey = 'job';
    this.basicSetting1.displayKey = 'job';
    this.basicSetting1.serviceUrl = 'https://mysocietyconnect.com/mps/cs/interval_unit_dropdown.json';
    this.basicSetting1.valueTypeOrKey = 'job';

    this.basicSetting2 = new DropdownWithDescriptionModel();
    this.basicSetting2.ListDisplayKeys = [{
      headerName: 'Text File',
      displayKey: 'textFile'
    }];
    this.basicSetting2.displayKey = 'textFile';
    this.basicSetting2.serviceUrl = 'https://mysocietyconnect.com/mps/cs/interval_unit_dropdown.json';
    this.basicSetting2.valueTypeOrKey = 'textFile';
  }

}
