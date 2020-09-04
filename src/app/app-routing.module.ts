import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';

const routes: Routes = [
	{ path: '', redirectTo: '/ag-grid', pathMatch: 'full' },
	{ path: 'ag-grid', component: AgGridComponent },
	{ path: 'dev-extreme', component: DevExtremeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
