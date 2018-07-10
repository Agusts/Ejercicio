import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';

import { RouterModule, Routes } from '@angular/router';



const APP_ROUTES: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'buscar/:termino', component: SearchComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'table' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
