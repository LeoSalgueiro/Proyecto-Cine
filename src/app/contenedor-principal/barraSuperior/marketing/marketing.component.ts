import { Component, OnInit } from '@angular/core';
import { Persona, Consulta } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import{FormsModule} from '@angular/forms';
import{NgModule} from '@angular/core';
import { Formulario } from './formulario.model';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})

@NgModule({

  imports : [FormsModule]

})
export class MarketingComponent implements OnInit {
  private personas:any[];
  // CREO EL FORMULARIO como un atributo

  formulario = new Formulario('','','','', '','');


  constructor(private conector:APIControllersService) {
  }

  ngOnInit() {
  }
  get currentFormulario(){
    return JSON.stringify(this.formulario);
  }
 // METODO QUE GUARDA EL FORMULARIO EN LA BD
  enviarFomulario(){
    console.log("enviarForm");
    // CREO LA PERSONA  y la empresa ?---> Falta atributo empresa en tabla persona
    // PERSONA Y CONSULTA ESTAN DEFINIDOS EN EL COMPONENTE "BD"
    let persona : Persona;
    persona.setNombre(this.formulario.nombre);
    persona.setTelefono(this.formulario.telefono);
    persona.setEmail(this.formulario.email);
    persona.setCiudad(this.formulario.ciudad);

    // CREO LA CONSULTA

    let consulta: Consulta;
    consulta.setId(persona.getDocumento());
    consulta.setConsulta(this.formulario.consulta);
    consulta.setMotivo("marketing");
    consulta.setEmail(this.formulario.email);
  
    console.log(this.conector.ObtenerPersona(persona.getEmail()).subscribe(res=>{this.personas=res}));
         //this.conector.guardarConsulta(consulta);
    //}
    //else{
        //this.conector.guardarPersona(persona);
        //this.conector.guardarConsulta(consulta);
    //}
  }
}
