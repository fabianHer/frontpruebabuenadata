import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuario.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios =[];
  formularioEnvio: FormGroup;
  verFormulario = false;
  accion: string = '';

  constructor(private usuariosService: UsuariosService, 
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getUsuarios();
    this.crearEditarformulario();
  }
 
  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe((res: any)=>{
    this.listaUsuarios = res;    
    },(err)=>{
      console.log(err);
    })
  }

  agregarUsuario(){
    if(this.formularioEnvio.status === 'VALID'){
       if(this.accion ==='editar'){
        this.usuariosService.updateUsuario(this.formularioEnvio.value.id,this.formularioEnvio.value).subscribe(res=>{
         
          swal.fire('Usuario actualizado');
          this.formularioEnvio.reset();
          this.getUsuarios();
        },(err)=>{
          console.log(err);
        })
       } else {
      this.usuariosService.createUsuario(this.formularioEnvio.value).subscribe((res: any)=>{  

         swal.fire('Usuario creado');
         this.formularioEnvio.reset();
         this.getUsuarios();
        },(err)=>{
          console.log(err);
        })
    }
  }
  }
  crearEditarformulario(datos?){   
    this.formularioEnvio= this.fb.group({      
      id: [datos? datos.id: ''],
      nombre: [datos? datos.nombre: '', Validators.required],
      fechaNacimiento: [datos? datos.fechaNacimiento.split('T')[0]: '', Validators.required],
      identificacion: [datos? datos.identificacion: '', Validators.required],
    })
  }
  consultarUsuario(id){
    this.usuariosService.getUsuario(id).subscribe(res=>{
      this.verFormulario = true;
      this.accion ='editar';
      this.crearEditarformulario(res);
    },(err)=>{
      console.log(err);
    })
  }
  eliminarUsuario(id){
    this.usuariosService.deleteUsuario(id).subscribe(res=>{    
     swal.fire('Usuario eliminado')
      this.getUsuarios();
    },(err)=>{
      console.log(err);
    })
  }
  get getNombre() {
    return this.formularioEnvio.get('nombre');
  }
  get getFechaNacimiento() {
    return this.formularioEnvio.get('fechaNacimiento');
  }
  get getIdentificacion() {
    return this.formularioEnvio.get('identificacion');
  }
  verOcultarFormulario(){
    this.accion ='';
    this.formularioEnvio.reset();
    this.verFormulario = this.verFormulario? false : true;
  }
}
