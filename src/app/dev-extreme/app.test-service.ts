import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Injectable({ providedIn: 'root' })
export class Service {
	getDataSource(): DataSource {
		return new DataSource({
			store: {
				type      : 'odata',
				url       : 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
				beforeSend: (request) => {
					request.params.startDate = '2018-05-10';
					request.params.endDate = '2018-05-15';
				}
			}
		});
	}
}
