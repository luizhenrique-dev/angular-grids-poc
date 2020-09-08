import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { DevExtremeModule, DxBulletModule, DxButtonModule, DxDataGridModule, DxServerTransferStateModule, DxTemplateModule } from 'devextreme-angular';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { SetFilterModule } from 'ag-grid-enterprise/dist/lib/setFilterModule';

import './localization';

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
		DxServerTransferStateModule,
		DevExtremeModule,
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {}
