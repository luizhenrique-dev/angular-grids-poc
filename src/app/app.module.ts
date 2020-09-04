import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		DevExtremeComponent,
		AgGridComponent
	],
	imports     : [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		AgGridModule.withComponents([]),
		DxButtonModule,
		DxDataGridModule,
		DxBulletModule,
		DxTemplateModule,
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {}
