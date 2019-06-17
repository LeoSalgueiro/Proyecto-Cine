import { Injectable } from '@angular/core';
import { Consulta } from './consulta';//pongo que voy a usar esas clases del modelo

@Injectable({
  providedIn: 'root'
})
export class GestorConsultaService {
  
  constructor(){ }
  
  public crearConsulta(email:string,motivo:number,detalle:string) {
    let consulta=new Consulta(0,email,motivo,detalle);
    consulta.save();//guarda en BD
  }
 
}
