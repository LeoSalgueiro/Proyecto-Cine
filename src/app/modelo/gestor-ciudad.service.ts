import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';//pongo que voy a usar esas clases del modelo
import { APIControllersService } from './../APIControllers/apicontrollers.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestorCiudadService {
  
  constructor(private conector:APIControllersService) { }
  
 public getCiudades(){
      this.conector.crearConsulta();
      
  return this.conector.ObtenerCiudades().pipe(
     map(datos => {
          if (datos instanceof Array) {
            return datos.map(dato => {return new Ciudad(dato['ID_PROVINCIA'],dato['CIUDAD']);});
          }
        })
      );
 }
 

}
