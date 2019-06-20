import { Injectable } from '@angular/core';
import { Consulta } from './consulta';//pongo que voy a usar esas clases del modelo
import { APIControllersService } from './../APIControllers/apicontrollers.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorConsultaService {
  
  constructor(private conector:APIControllersService){ }
  
  public crearConsulta(email:string,motivo:string,detalle:string) {
      this.conector.crearConsulta({ID_CONSULTA:null,DETALLE:detalle,MOTIVO:motivo,EMAIL:email});
      
  }
 
}
