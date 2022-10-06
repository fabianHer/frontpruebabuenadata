import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modulos
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
   PagesComponent,
   UsuariosComponent
  ],
  exports: [
    PagesComponent,
    UsuariosComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PagesModule { }
