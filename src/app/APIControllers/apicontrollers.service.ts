import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pelicula, FormEmpresa, Transmiten} from '../bd/bd.component';
import { Observable } from 'rxjs';
import {Persona, Consulta } from 'src/app/bd/bd.component';
import { formSuscriptor, formPersona } from '../contenedor-principal/noticias/suscriptor.model';
import { FormParticipante } from '../contenedor-principal/sorteos-semanales/suscriptor.model';

@Injectable({
  providedIn: 'root'
})
export class APIControllersService {

private url = (`http://localhost:3000/API`);

  constructor(private conector: HttpClient) { 
      

  }
  ObtenerCartelera(fecha: String):Observable<Pelicula[]>{    
    return this.conector.get<Pelicula[]>(`http://localhost:3000/API/Cartelera/${fecha}`);
    
  }
  BuscarSolicitante(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Solicitante/${email}`);
  }
  BuscarProximosEstrenos(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/ProximosEstrenos/${fecha}`);
  }
  ObtenerCombosDisponibles(ciudad: String){//PASAR PARÝMETRO s:string= "San Luis"
    return this.conector.get<any[]>(`http://localhost:3000/API/Combos/${ciudad}`);
  }
  ObtenerPersona(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Personas/${email}`);
  }
  BuscarBeneficiosDisponibles(){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Beneficios/`);
  }

  BuscarPelicula(id:number){
    return this.conector.get<any[]>(`http://localhost:3000/API/Peliculas/${id}`);
  }

   ObtenerCiudades(){ 
     return this.conector.get(`http://localhost:3000/API/Ciudades/`);
  // this.conector.get(`http://localhost:3000/API/Ciudades/`).subscribe(data =>{ this.profile = data});
    return this.conector.get(`http://localhost:3000/API/Ciudades/`);
  }
  crearConsulta(datos:Object){   
    this.conector.post(this.url+'/Consultas/', datos ).subscribe((res) =>{ console.log(res);alert(res["message"]);});
  }
  
  crearPersona(datos:Object){ 
       this.conector.post(this.url+'/Personas/', datos ).subscribe(res => console.log(res));
 }
 
 // METODO QUE GUARDA UNA CONSULTA DE UNA EMPRESA AL DEPARTAMENTO DE MARKETING
 guardarEmpresa(empresa: FormEmpresa): Observable<any>{
  //  let json = JSON.stringify(empresa);
   //let empresaJSON = "json="+json;
    return this.conector.post(this.url+'/Empresas/', empresa );

}

// PARA VER UNA TRANSMISION PARTICULAR, PELICULA MAS SU HORARIO Y SALA
getTransmision(id_pelicula: Number){    

  return this.conector.get<any[]>(`http://localhost:3000/API/Transmiten/${id_pelicula}`);
}


guardarSuscriptor(s:formSuscriptor):Observable<any>{
  console.log(s);
  return this.conector.post('http://localhost:3000/API/Suscriptores/',s);
}

guardarPersona(p:formPersona):Observable<any>{
  return this.conector.put('http://localhost:3000/API/Personas/',p);
}

existePersona(email:string){
  return this.conector.get<any>(`http://localhost:3000/API/Personas/${email}`);
}

existeSuscriptor(email:string){
  return this.conector.get<any>(`http://localhost:3000/API/Suscriptores/${email}`);
}

borrarSuscriptor(email:string){
    return this.conector.delete<any>(`http://localhost:3000/API/Suscriptores/${email}`);
}

borrarPersona(email:string){
  return this.conector.delete<any>(`http://localhost:3000/API/Personas/${email}`);
}


getParticipante(email:string){
  return this.conector.get<any>(`http://localhost:3000/API/Participantes/${email}`);
}

/*guardarParticipante(p:FormParticipante):Observable<any>{
  return this.conector.post('http://localhost:3000/API/Participantes/',p);
}*/
guardarParticipante(parti: FormParticipante): Observable<any>{
  //  let json = JSON.stringify(empresa);
   //let empresaJSON = "json="+json;
   console.log(parti);
    return this.conector.post(this.url+'/Participantes/', parti );

} 
}
