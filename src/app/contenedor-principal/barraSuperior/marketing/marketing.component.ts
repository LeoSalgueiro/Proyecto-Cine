import { Component, OnInit } from '@angular/core';
import { Persona, Consulta } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import{FormsModule} from '@angular/forms';
import{NgModule} from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})

@NgModule({

  imports : [FormsModule]

})
export class MarketingComponent implements OnInit {

  // CREO EL FORMULARIO como un atributo

  formulario = {
    nombre: "",
    email:"",
    empresa:"",
    telefono: "",
    ciudad:"",
    consulta: ""
  };


  constructor(private conector:APIControllersService) {
  }

  ngOnInit() {
  }

 // METODO QUE GUARDA EL FORMULARIO EN LA BD
  enviarFomulario(){

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

    if(this.conector.existePersona(persona.getEmail())){
         this.conector.guardarConsulta(consulta);
    }
    else{
        this.conector.guardarPersona(persona);
        this.conector.guardarConsulta(consulta);
    }
  }
}
