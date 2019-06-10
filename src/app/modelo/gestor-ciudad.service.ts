import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';//pongo que voy a usar esas clases del modelo

@Injectable({
  providedIn: 'root'
})
export class GestorCiudadService {
  private ciudades:Array<Ciudad>;
  constructor() { }
  public getCiudades():Array<Ciudad>{
    this.ciudades=[new Ciudad(1,"Alta Gracia"),
                    new Ciudad(2,"Bahía Blanca"),
                    new Ciudad(3,"Catamarca"),
                    new Ciudad(4,"Corrientes"),
                    new Ciudad(5,"Florencio Varela"),
                    new Ciudad(6,"La Rioja"),
                    new Ciudad(7,"Mar del Plata"),
                    new Ciudad(8,"Mendoza"),
                    new Ciudad(9,"Resistencia"),
                    new Ciudad(10,"Rio Cuarto"),
                    new Ciudad(11,"San Juan"),
                    new Ciudad(12,"San Luis"),
                    new Ciudad(13,"Santiago del Estero"),
                    new Ciudad(14,"Tandil"),
                    new Ciudad(15,"Tucuman")]
    return this.ciudades;

  }
}
