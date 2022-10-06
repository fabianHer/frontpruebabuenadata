import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }
 //Headers, para este caso aplican
 get headers() {
    return {
      headers: {
        'Content-Type': '*' 
      }
    }
  }
 //busqueda de todos los usuarios
 getUsuarios() {
    const url = `${ base_url }`;
    return this.http.get( url, this.headers );
  }
 //busqueda de usuario por id
  getUsuario( id: string ) {
    const url = `${ base_url }/${ id }`;
    return this.http.get( url );
  }
  createUsuario( datos ) {
    const url = `${ base_url }`;
    return this.http.post( url, datos );
  }
  updateUsuario(id, datos){
    const url = `${ base_url }/${ id }`;
    return this.http.put( url, datos );
  }
  deleteUsuario( id ) {
    const url = `${ base_url }/${ id }`;
    return this.http.delete( url );
  }

}
