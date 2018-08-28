import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import { FrontPanelModule } from './pages/front-panel/front-panel.module';
import { ComponentModule, AGModule, ComponentServiceModule } from './component';
import { ServiceModule } from './core/services';
import { GuardModule } from './core/guard';
import { DirectiveModule } from './core/directive';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    FrontPanelModule,
    ServiceModule,
    GuardModule,
    AGModule,
    ComponentModule,
    ComponentServiceModule,
    DirectiveModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
