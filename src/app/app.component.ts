import { Component, OnInit } from '@angular/core';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
	// autoGroupColumnDef = {
	// 	headerName        : 'Model',
	// 	field             : 'model',
	// 	cellRenderer      : 'agGroupCellRenderer',
	// 	cellRendererParams: {
	// 		checkbox: true
	// 	}
	// };

	// columnDefs = [
	// 	{ headerName: 'Make', field: 'make', rowGroup: true },
	// 	{
	// 		headerName    : 'Price', field: 'price',
	// 		valueFormatter: params => params.data.number.toFixed(2),
	// 	}
	// ];

	constructor() {
	}

	ngOnInit(): void {
	}

}
