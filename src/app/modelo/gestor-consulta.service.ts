import { Injectable } from '@angular/core';
import { Consulta } from './consulta';//pongo que voy a usar esas clases del modelo
import { APIControllersService } from './../APIControllers/apicontrollers.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorConsultaService {
  
  constructor(private conector:APIControllersService){ }
  
  public crearConsulta(email:string,motivo:number,detalle:string) {
    let consulta=new Consulta(0,email,motivo,detalle);
    consulta.save();//guarda en BD
   
  }
 
}
