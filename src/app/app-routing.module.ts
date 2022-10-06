import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Modulos
import { PagesRoutingModule } from './pages/pages.routing';



const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
