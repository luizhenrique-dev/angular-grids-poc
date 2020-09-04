import { Component, enableProdMode, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Service } from './app.test-service';

if (!/localhost/.test(document.location.host)) {
	enableProdMode();
}

@Component({
	selector   : 'app-dev-extreme',
	templateUrl: './dev-extreme.component.html',
	styleUrls  : ['./dev-extreme.component.scss'],
	providers  : [Service]
})
export class DevExtremeComponent implements OnInit {
	dataSource: DataSource;
	collapsed = false;
	contentReady = (e) => {
		if (!this.collapsed) {
			this.collapsed = true;
			e.component.expandRow(['EnviroCare']);
		}
	}
	customizeTooltip = (pointsInfo) => {
		return { text: parseInt(pointsInfo.originalValue) + '%' };
	}

	constructor(service: Service) {
		this.dataSource = service.getDataSource();
	}

	ngOnInit(): void {
	}

}
