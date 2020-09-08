import { Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { Service } from './app.test-service';
import 'devextreme/data/odata/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/excel_exporter';
import saveAs from 'file-saver';
import * as ExcelJS from 'exceljs';
import query from 'devextreme/data/query';
import Globalize from 'globalize';
import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';


import ptMessages from 'devextreme/localization/messages/pt.json';

import ptCldrData from 'devextreme-cldr-data/pt.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';

if (!/localhost/.test(document.location.host)) {
	enableProdMode();
}

@Component({
	selector           : 'app-dev-extreme',
	templateUrl        : './dev-extreme.component.html',
	styleUrls          : ['./dev-extreme.component.scss'],
	providers          : [Service],
	preserveWhitespaces: true
})
export class DevExtremeComponent implements OnInit {

	constructor(private http: HttpClient, private service: Service) {
		this.locale = this.getLocale();
		this.devAVDataSource = {
			store : {
				type: 'odata',
				url : 'https://js.devexpress.com/Demos/DevAV/odata/Products'
			},
			select: [
				'Product_ID',
				'Product_Name',
				'Product_Cost',
				'Product_Sale_Price',
				'Product_Retail_Price',
				'Product_Current_Inventory'
			],
			filter: ['Product_Current_Inventory', '>', 0]
		};

		this.http.get('assets/teste.json').subscribe(data => {
			// this._showLoading();
			this.dataSource = data;
			// this._hideOverlay();
		});

		this.applyFilterTypes = [{
			key : 'auto',
			name: 'Immediately'
		}, {
			key : 'onClick',
			name: 'On Button Click'
		}];

		this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
		this.saleAmountHeaderFilter = [{
			text : 'Less than $3000',
			value: ['SaleAmount', '<', 3000]
		}, {
			text : '$3000 - $5000',
			value: [
				['SaleAmount', '>=', 3000],
				['SaleAmount', '<', 5000]
			]
		}, {
			text : '$5000 - $10000',
			value: [
				['SaleAmount', '>=', 5000],
				['SaleAmount', '<', 10000]
			]
		}, {
			text : '$10000 - $20000',
			value: [
				['SaleAmount', '>=', 10000],
				['SaleAmount', '<', 20000]
			]
		}, {
			text : 'Greater than $20000',
			value: ['SaleAmount', '>=', 20000]
		}];

		this.customOperations = [{
			name                     : 'weekends',
			caption                  : 'Weekends',
			dataTypes                : ['date'],
			icon                     : 'check',
			hasValue                 : false,
			calculateFilterExpression: () => {
				return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
			}
		}];
		this.currentFilter = this.applyFilterTypes[0].key;
		this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
		this.initGlobalize();
		Globalize.locale(this.locale);
	}

	dataSource: any;
	devAVDataSource: any;
	saleAmountHeaderFilter: any;
	currentFilter: any;
	applyFilterTypes: any;
	customOperations: Array<any>;
	popupPosition: any;
	expanded = true;
	totalCount: number;
	formatMessage = Globalize.formatMessage.bind(Globalize);
	locale: string;

	@ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

	private static getOrderDay(rowData): any {
		return (new Date(rowData.OrderDate)).getDay();
	}

	public getJSON(): Observable<any> {
		return this.http.get('assets/teste.json');
	}

	initGlobalize(): void {
		Globalize.load(
			ptCldrData,
			supplementalCldrData
		);
		Globalize.loadMessages(ptMessages);
		Globalize.loadMessages(this.service.getDictionary());
		console.log(this.locale);
	}

	getLocale(): string {
		const locale = sessionStorage.getItem('locale');
		return locale != null ? locale : 'pt-BR';
	}

	citySelector(data): string {
		return data.city + ' (' + data.country + ')';
	}

	calculateCellValue(data): string {
		return [data.Title, data.FirstName, data.LastName].join(' ');
	}

	calculateFilterExpression(value, selectedFilterOperations, target): any {
		const column = this as any;
		if (target === 'headerFilter' && value === 'weekends') {
			return [[DevExtremeComponent.getOrderDay, '=', 0], 'or', [DevExtremeComponent.getOrderDay, '=', 6]];
		}
		return column.defaultCalculateFilterExpression.apply(this, arguments);
	}

	orderHeaderFilter(data): any {
		data.dataSource.postProcess = (results) => {
			results.push({
				text : 'Weekends',
				value: 'weekends'
			});
			return results;
		};
	}

	clearFilter(): void {
		this.dataGrid.instance.clearFilter();
	}

	ngOnInit(): void {
	}

	onExporting(e): void {
		const workbook = new ExcelJS.Workbook();
		const worksheet = workbook.addWorksheet('Teste');

		exportDataGrid({
			component        : e.component,
			worksheet,
			autoFilterEnabled: true
		}).then(() => {
			// https://github.com/exceljs/exceljs#writing-xlsx
			workbook.xlsx.writeBuffer().then((buffer) => {
				saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
			});
		});
		e.cancel = true;
	}

	onToolbarPreparing(e): void {
		e.toolbarOptions.items.unshift({
			location: 'before',
			template: 'totalGroupCount'
		}, {
			location: 'before',
			widget  : 'dxSelectBox',
			options : {
				width         : 200,
				items         : [{
					value: 'country',
					text : 'Agrupar por País'
				}, {
					value: 'year',
					text : 'Agrupar por Ano'
				}],
				displayExpr   : 'text',
				valueExpr     : 'value',
				value         : 'country',
				onValueChanged: this.groupChanged.bind(this)
			}
		}, {
			location: 'before',
			widget  : 'dxButton',
			options : {
				width  : 136,
				text   : 'Expandir',
				onClick: this.collapseAllClick.bind(this)
			}
		}, {
			location: 'after',
			widget  : 'dxButton',
			options : {
				icon   : 'refresh',
				onClick: this.refreshDataGrid.bind(this)
			}
		});
	}

	getGroupCount(groupField): number {
		return query(this.dataSource)
			.groupBy(groupField)
			.toArray().length;
	}

	groupChanged(e): void {
		this.dataGrid.instance.clearGrouping();
		this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
		this.totalCount = this.getGroupCount(e.value);
	}

	collapseAllClick(e): void {
		this.expanded = !this.expanded;
		e.component.option({
			text: this.expanded ? 'Collapse All' : 'Expand All'
		});
	}

	refreshDataGrid(): void {
		this.dataGrid.instance.refresh();
	}

}

const getOrderDay = (rowData: any): number => {
	return (new Date(rowData.OrderDate)).getDay();
};
