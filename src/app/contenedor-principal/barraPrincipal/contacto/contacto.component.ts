import { Component ,OnInit } from '@angular/core';
import { GestorConsultaService } from './../../../modelo/gestor-consulta.service';
import { GestorPersonaService } from './../../../modelo/gestor-persona.service';
import { GestorCiudadService } from './../../../modelo/gestor-ciudad.service';
import { Ciudad } from './../../../modelo/ciudad';//pongo que voy a usar esas clases del modelo
import{NgForm}from'@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   private ciudades:Array<Ciudad>;
   constructor(private gestorConsulta: GestorConsultaService,private gestorPersona:GestorPersonaService,private gestorCiudad:GestorCiudadService) {
  }
   ngOnInit() {
       this.ciudades=this.gestorCiudad.getCiudades();
  }
   public registrarConsulta(consultaForm:NgForm): void {//USO EL GESTOR
        let value=consultaForm.value;
        if(!this.gestorPersona.existe(value.email)){
            this.gestorPersona.crearPersona(value.ciudad,value.nombre,value.apellido,value.email,"","","",value.telefono,"consulta");
        }
        this.gestorConsulta.crearConsulta(value.email,value.motivo,value.consulta);
        consultaForm.reset();
  }
}
