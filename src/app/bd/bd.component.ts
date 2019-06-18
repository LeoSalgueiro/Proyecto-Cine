import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
@Injectable()
export class BDComponent implements OnInit {


ngOnInit(){}

}

export interface Beneficio {
  ID_BENEFICIO: number;
  NOMBRE:String;
  DESDE: Date;
  HASTA: Date;
  TIPO: string;
  CONGENERALES: string;
  /*plazas:String[];
  validez:Date[];
  tipo:String;
  condicionesGenerales:String;
  disponible:Boolean;
  detalleSalas:String;*/
}


export interface Pelicula{
  
    ID_PELICULA:number;
    NOMBRE:string;
    FECHAESTRENO:Date;
    CLASIFICACION:string;
    GENERO: string;
    DURACION:number;
    DISPONIBLE: number;
    ID_DIR1:number;
    ID_DIR2:number;
    ID_DISTRIBUIDORA:number;
    RESENIA: string;
}


export class Director{
  private nombre:String;
  private apellido:String;
  private id:String;

  constructor(nombre:String,apellido:String,id:String){
    this.nombre=nombre;
    this.apellido=apellido;
    this.id=id;
  }

  public setNombre(nombre:string){
    this.nombre=nombre;
  }
  public setApellido(apellido:string){
    this.apellido=apellido;
  }
  public setId(id:string){
    this.id=id;
  }

  public getNombre(){return this.nombre;}
  public getApellido(){return this.apellido;}
  public getId(){return this.id;}
}

export class Cartelera {
  private peliculas:Array<Pelicula>;
  private fechaInicio:Date;
  private fechaFin:Date;

  constructor(peliculas:Array<Pelicula>,fechaInicio:Date,fechaFin:Date){
    this.peliculas=peliculas;
    this.fechaInicio=fechaInicio;
    this.fechaFin=fechaFin;
  }

  public getPeliculas(){return this.peliculas;}
  public getFechaInicio(){return this.fechaInicio;}
  public getFechaFin(){return this.fechaFin;}
  

}

//#### PARTE DE MARKETING #######
export class Consulta{
  private  id: Number;
  private motivo: String;
  private consulta: String;
  private email: String;

  constructor(id: Number, motivo: String, consulta: String, email: String){
     this.id = id;
     this.email = email;
     this.motivo = motivo;
     this.consulta = consulta;
  }


  public getId(){ return this.id;  }
  public getEmail(){return this.email;}
  public getConsulta(){return this.consulta;}
  public getMotivo(){return this.motivo;}

  public setId(id: Number){this.id = id;}
  public setEmail(email: String){this.email = email;}
  public setMotivo(motivo : String){ this.motivo = motivo;}
  public setConsulta(consulta: String){this.consulta = consulta;}

}

export class Persona{
  private documento: Number;
  private tipoDoc: String;
  private nombre: String;
  private apellido: String;
  private email: String;
  private fecha_nac: Date;
  private telefono: String;
  private tipo_persona: String;
  private ciudad: String;


  constructor( documento: Number,tipoDoc: String, nombre: String, apellido: String,email: String, fecha_nac: Date
,telefono: String,tipo_persona: String){

  this.documento = documento;
  this.tipoDoc = tipoDoc;
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.fecha_nac = fecha_nac;
  this.telefono = telefono;
  this.tipo_persona = tipo_persona;


}

public getDocumento(){return this.documento;}
public getTipoDoc(){return this.tipoDoc;}
public getNombre(){return this.nombre;}
public getApellido(){return this.apellido;}
public getEmail(){return this.email;}
public getTelefono(){return this.telefono;}
public getFechaNac(){return this.fecha_nac;}
public getTipoPersona(){return this.tipo_persona;}
public getCiudad(){return this.ciudad};

public setCiudad(ciudad: String){this.ciudad =  ciudad};
public setDocumento(documento: Number){ this.documento = documento;}
public setTipoDoc(tipoDoc: String){ this.tipoDoc= tipoDoc;}
public setNombre(nombre: String){ this.nombre = nombre;}
public setApellido(apellido: String){ this.apellido = apellido;}
public setEmail(email: String){ this.email = email;}
public setTelefono(telefono: String){this.telefono = telefono;}
public setFechaNac(fecha: Date){this.fecha_nac = fecha;}
public setTipoPersona(tipo: String){ this.tipo_persona = tipo;}





}