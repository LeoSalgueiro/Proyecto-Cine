import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Persona, Consulta } from 'src/app/bd/bd.component';

@Injectable({
  providedIn: 'root'
})
export class APIControllersService {
  
  constructor(private conector: HttpClient) { 
      

  }
  ObtenerCartelera(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Cartelera/${fecha}`);
  }
  BuscarSolicitante(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Solicitante/${email}`);
  }
  BuscarProximosEstrenos(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/ProximosEstrenos/${fecha}`);
  }
  ObetenerCombosDisponibles(ciudad: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Combos/${ciudad}`);
  }
  ObtenerPersona(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Personas/${email}`);
  }
  BuscarBeneficiosDisponibles(){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Beneficios/`);
  }

  /// metodos necesarios para comunicarse con el Dpto de Marketing
  existePersona(email: String): Boolean{
    
  }
  guardarPersona(persona: Persona){

  }
  guardarConsulta(consulta: Consulta){

  }
}
