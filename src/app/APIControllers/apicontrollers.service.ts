import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pelicula, FormEmpresa, Transmiten} from '../bd/bd.component';
import { Observable } from 'rxjs';
import {Persona, Consulta } from 'src/app/bd/bd.component';
import { formSuscriptor, formPersona } from '../contenedor-principal/noticias/suscriptor.model';

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

  // this.conector.get(`http://localhost:3000/API/Ciudades/`).subscribe(data =>{ this.profile = data});
    return this.conector.get(`http://localhost:3000/API/Ciudades/`);
  }
  crearConsulta(){
      /*return this.conector.put('http://localhost:3000/API/Consultas/', {
        "DETALLE":  "trantando guardar",
        "MOTIVO":  "1",
        "MAIL":""
        }, httpOptions)
    .pipe(
      catchError(this.handleError('update', {
        "DETALLE":  "trantando guardar",
        "MOTIVO":  "1",
        "MAIL":"inaleng25@gmail.com"
        }))
    )¨*/
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

}
