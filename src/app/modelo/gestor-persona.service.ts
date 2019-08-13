import { Injectable } from '@angular/core';
import { Persona } from './persona';//pongo que voy a usar esas clases del modelo
import { APIControllersService } from './../APIControllers/apicontrollers.service';

@Injectable({
  providedIn: 'root'
})
export class GestorPersonaService {
 // private  persona: Persona;
  constructor(private conector:APIControllersService){ }
 
  public crearPersona(nombre: string,apellido: string,email: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string,personaTipo:string) {
     this.conector.crearPersona({DOC:nroDoc,TIPO_DOC:tipoDoc,NOMBRE:nombre,APELLIDO:apellido,EMAIL:email,FECHA_NAC:fechaNac,TELEFONO:telefono,PERSONA_TIPO:personaTipo});
    
  }
  public existe(correo:string):boolean{
      return true;
  }
}
