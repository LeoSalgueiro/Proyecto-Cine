import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pelicula, FormEmpresa, Transmiten} from '../bd/bd.component';
import { Observable } from 'rxjs';
import {Persona, Consulta } from 'src/app/bd/bd.component';

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
  ObtenerCiudades(){  

  // this.conector.get(`http://localhost:3000/API/Ciudades/`).subscribe(data =>{ this.profile = data});
    return this.conector.get(`http://localhost:3000/API/Ciudades/`);
  }
  crearConsulta(email:string,motivo:string,detalle:string){
    this.conector.post(this.url+'/Consultas/', {ID_CONSULTA:null,DETALLE:detalle,MOTIVO:motivo,EMAIL:email} )  .subscribe(
      res => console.log(res)
    );
  }
  
  crearPersona(ciudad: number,nombre: string,apellido: string,email: string,tipoDoc: string,nroDoc: string,fechaNac: string,telefono: string,personaTipo:string){
       this.conector.post(this.url+'/Persona/', {DOC:nroDoc,TIPO_DOC:tipoDoc,NOMBRE:nombre,APELLIDO:apellido,EMAIL:email,FECHA_NAC:fechaNac,TELEFONO:telefono,PERSONA_TIPO:personaTipo} )  .subscribe(
      res => console.log(res)
    );
  }
 
 // METODO QUE GUARDA UNA CONSULTA DE UNA EMPRESA AL DEPARTAMENTO DE MARKETING
 guardarEmpresa(empresa: FormEmpresa): Observable<any>{
  //  let json = JSON.stringify(empresa);
   //let empresaJSON = "json="+json;
    return this.conector.post(this.url+'/Empresas/', empresa );

}

// PARA VER UNA TRANSMISION PARTICULAR, PELICULA MAS SU HORARIO Y SALA
getTransmision(id_pelicula: Number){    

  return this.conector.get<any>(`http://localhost:3000/API/Transmiten/${id_pelicula}`);
}




}
