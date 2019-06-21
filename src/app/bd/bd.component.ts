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
    CLASIFICACION:String;
    DURACION:Number;
    DISPONIBLE:{type:String, data:[]};
    ID_DIR1:Number;
    ID_DIR2:Number;
    ID_DISTRIBUIDORA:Number;
    RESENIA: string;
    GENERO: string;
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

export class Empresa{

  private nombre: string;
  private email:string;
  private empresa:string;
  private telefono: string;
  private ciudad:string;
  private consulta: string;


    constructor( nombre: string,email:string, empresa:string, telefono: string,ciudad:string, consulta: string ){

      this.nombre = nombre;
      this.email = email;
      this.empresa = empresa;
      this.telefono = telefono;
      this.ciudad = ciudad;
      this.consulta = consulta;
    }
    public getNombre(){
      return this.nombre;
    }
    public getEmail(){
      return this.email;
    }
    public getTelefono(){
      return this.telefono;

    }
    public getCiudad(){
      return this.ciudad;
    }
    public getConsulta(){
      return this.consulta;
    }
    public getEmpresa(){
      return this.empresa;
    }

    // SETS

    public setNombre(nombre: string){
      this.nombre = nombre;
    }
    public setEmail(email:string){
       this.email = email;
    }
    public setTelefono(telefono: string){
       this.telefono = telefono;

    }
    public setCiudad(ciudad: string){
      this.ciudad= ciudad;
    }
    public setConsulta(consulta: string){
       this.consulta = consulta;
    }
    public setEmpresa(empresa: string){
       this.empresa = empresa;
    }



}
export interface FormEmpresa{

  nombre: string;
  email:string;
  empresa:string;
   telefono: string;
   ciudad:string;
    consulta: string;
 
}

export class Pelicula_class{
  
  id:Number;
  nombre:String;
  fecha_estreno:Date;
  clasificacion:String;
  duracion:Number;
  disponible:{type:String, data:[]};
  id_dir1:Number;
  id_dir2:Number;
  id_distribuidora:Number;


  public setNombre(nombre: string){
       this.nombre = nombre;
  }
  public getNombre(){
    return this.nombre ;
}


}

export interface Transmiten{
  ID_SALA: Number;
  ID_PELICULA: Number;
  HORARIOS: string;
}

export interface Suscriptor{
EMAIL:string;
ACOMPANIANTE:string;
ID_DF:number;
HORARIO:string;
SEXO:string;

}