import { Component ,OnInit } from '@angular/core';
import { GestorConsultaService } from './../../../modelo/gestor-consulta.service';
import { GestorPersonaService } from './../../../modelo/gestor-persona.service';
import { GestorCiudadService } from './../../../modelo/gestor-ciudad.service';
import { Ciudad } from './../../../modelo/ciudad';//pongo que voy a usar esas clases del modelo
import { Consulta } from './../../../modelo/consulta';//pongo que voy a usar esas clases del modelo
import { map } from 'rxjs/operators';


import{NgForm}from'@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   private ciudades:any[]=[];
   constructor(private gestorConsulta: GestorConsultaService,private gestorPersona:GestorPersonaService,private gestorCiudad:GestorCiudadService) {
  }
   ngOnInit() {
       this.gestorCiudad.getCiudades().subscribe(res => {this.ciudades = res;});;
  }
   public registrarConsulta(consultaForm:NgForm): void {//USO EL GESTOR
     
        let value=consultaForm.value;
        //this.gestorPersona.crearPersona(value.ciudad,value.nombre,value.apellido,value.email,"","","",value.telefono,"consulta");
        
        this.gestorConsulta.crearConsulta(value.email,value.motivo,value.consulta);
        consultaForm.reset();
  }
}
