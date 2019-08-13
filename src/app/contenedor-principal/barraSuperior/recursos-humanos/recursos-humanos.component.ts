import { Component, OnInit } from '@angular/core';
import { Solicitud } from './solicitud.model';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import{NgModule} from '@angular/core';
import{FormsModule, NgForm} from '@angular/forms'

import { ImplicitReceiver } from '@angular/compiler';




@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.component.html',
  styleUrls: ['./recursos-humanos.component.css']
})

@NgModule({

  imports : [FormsModule, NgForm]

})

export class RecursosHumanosComponent implements OnInit {

 

  formulario : Solicitud = {
  nombre: '',
  apellido: '',
  genero: '',
  email: '',
  dni: '',
  fecha_nac: '',
  ciudad: '',
  telefono: '',
  estudios: '',
  ref_laborales: '',
  ref_personales: '',
  CV: '' }      


  constructor(private conector:APIControllersService) { }

  ngOnInit() {
  }



  get currentSolicitud(){
    return JSON.stringify(this.formulario)
  }

  enviarFormulario(form: NgForm){
   
    //console.log(this.formulario);
    // formulario es un objeto de la clase  Empresa
    this.conector.guardarSolicitante(this.formulario)
    .subscribe(
      res => console.log(res)
    );

    err => console.log(err);
    alert('Consulta Enviada !');

    form.reset();
  


  }

}
