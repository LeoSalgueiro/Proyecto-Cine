import { Component, OnInit } from '@angular/core';

import { Persona, Consulta } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import{NgModule} from '@angular/core';
import{FormsModule, NgForm} from '@angular/forms'
import {  FormEmpresa} from './formulario.model';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})

@NgModule({

  imports : [FormsModule, NgForm]

})
export class MarketingComponent implements OnInit {
  private personas:any[];
  // CREO EL FORMULARIO como un atributo

  //formulario = new Empresa('','','','', '','');
  formulario : FormEmpresa = {

    nombre : '',
    empresa : '',
    consulta :'',
    email :'',
    telefono :'',
    ciudad : ''};



  constructor(private conector:APIControllersService) {
  }

  ngOnInit() {
  }
 get currentFormulario(){
    return JSON.stringify(this.formulario);
  }

 // METODO QUE GUARDA EL FORMULARIO EN LA BD
  enviarFormulario(form: NgForm){
   
    //console.log(this.formulario);
    // formulario es un objeto de la clase  Empresa
    this.conector.guardarEmpresa(this.formulario)
    .subscribe(
      res => console.log(res)
    );

    err => console.log(err);
    alert('Consulta Enviada !');
  


  }


}
