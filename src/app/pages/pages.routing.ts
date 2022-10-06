import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';




const routes: Routes = [
    { 
        path: 'usuarios', 
        component: PagesComponent,
        canActivate: [],
        canLoad: [ ],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


