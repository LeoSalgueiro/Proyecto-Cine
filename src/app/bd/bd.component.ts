import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
@Injectable()
export class BDComponent implements OnInit {


private beneficio:Array<Beneficio>=[new Beneficio("Club Personal","personal",["Bahía Blanca","Catamarca","Corrientes","Florencio-Varela","Mar del Plata","Resistencia","Rio Cuarto","San Juan","San Luis","Santiago del Estero","Tandil","Tucuman","La Rioja","Mendoza"],[new Date("2017-08-18"),new Date("2019-05-31")],"Presentando el código de club personal podes acceder a un beneficio de 2x1 en entradas 2D y 3D todos los días."," Beneficio de 2x1 en entradas 2D todos los días válido para socios club personal, 2x1 en entradas 2D y 3D para socios club personal black todos los días. No combinable con otras promociones o descuentos. Para acceder el socio deberá enviar un SMS al 3372 con la palabra Cinemacenter. El código debe presentarse en boletería o ingresarlo en www.miboleteria.com.ar al realizar la compra. El cliente debe presentar el celular con el código recibido del 3372. No se aceptaran SMS reenviados, impresiones, chat de WhatsApp o códigos escritos manualmente. Los beneficios son válidos sobre el valor de entrada general y no son combinables con otras promociones. Están sujetos a capacidad de sala y eventuales restricciones por parte de las compañías de película. Se otorgará un máximo de un beneficio por día y por socio.",true,"Salas tradicionales y Salas 3D (socios BLACK)."),
new Beneficio("Banco Santander Río","santander",["Bahía Blanca","Catamarca","Corrientes","Florencio-Varela","Mar del Plata","Resistencia","Rio Cuarto","San Juan","San Luis","Santiago del Estero","Tandil","Tucuman","La Rioja","Pinamar"],[new Date("2015-04-01"),new Date("2019-12-31")],"Abonando tus entradas con tarjeta de crédito o débito del Banco Santander Río o Citi podes disfrutar de 2x1 en entradas 2D y 3D todos los días.","Quienes abonen con su Tarjeta Santander Rio Visa, Visa Electron y American Express de Santander Río, tanto de Crédito o Débito una entrada a precio base adulto recibirán 2 entradas.\n2x1 entradas 2D y 3D: Válido todos los días en los complejos adheridos. Tope máximo: Un beneficio por tarjeta, por día y por cliente.\nSe exceptúan festivales de cine, funciones privadas, avant premieres, funciones especiales y aquellas películas en las cuales los distribuidores no hayan prestado su conformidad expresa con la promoción en cuestión. Consultá complejos adheridos en www.santanderrio.com.ar. No acumulable con otras promociones. No aplica a tarjetas de cuenta básica ni de cuenta gratuita. La promoción excluye tarjetas de crédito Santander Rio Mastercard. Beneficio válido sobre el valor de la entrada general del complejo de cine.",true,"2x1 en entradas 2D y 3D todos los días.\nValidas para el titular. Presentar DNI junto con tarjeta."),
new Beneficio("Tarjeta Cencosud","cencosud",["Bahía Blanca","Catamarca","Corrientes","Florencio-Varela","Mar del Plata","Resistencia","Rio Cuarto","San Juan","San Luis","Santiago del Estero","Tandil","Tucuman","La Rioja","Mendoza"],[new Date("2016-01-01"),new Date("2019-12-30")],"Presentando el código de club personal podes acceder a un beneficio de 2x1 en entradas 2D y 3D todos los días.","Abonando con tu tarjeta CENCOSUD a través de Miboleteria.com.ar podés acceder a un beneficio de 2x1 en entradas 2D y 3D todos los días. Beneficios válidos sobre el valor de la entrada general del complejo de cine. Se acepta hasta una promoción por día por persona. Beneficios sujetos a capacidad de sala y a eventuales restricciones por parte de las compañías distribuidoras de películas. No combinable con otras promociones vigentes.\nEn Mar del Plata solo válido en los complejos de Ambassador y Cinema Los Gallegos Shopping.",true,"2x1 en entradas 2D y 3D todos los días. \nValidas para el titular. Presentar DNI junto con tarjeta.")];




private directores:Array<Director>=[new Director("Guy","Ritchie","101"),
new Director("David","Yarovesky","102"),
new Director("Chad","Stahelski","103"),
new Director("Juan José","Campanella","104"),
new Director("Gail","Mancuso","105"),
new Director("Kelly","Asbury","106"),
new Director("Rob","Letterman","107"),
new Director("Anthony","Russo","108"),
new Director("Joe","Russo","109")]
  
private carteleras:Array<Cartelera>=[new Cartelera(null,new Date("2019-5-30"),new Date("2019-6-5"))];

constructor() { }

  ngOnInit() {
  }

  public getBeneficios():Array<Beneficio>{
    return this.beneficio;
  }

 

  public getDirectorPorId(id:string):Director{
    for(let d of this.directores){
      if (d.getId()==id){
        return d;
      }
    }

  }

  public obtenerCartelera(fecha:Date):Cartelera{
    
    for (let c of this.carteleras){
      if (c.getFechaFin().toDateString()===fecha.toDateString()){
          return c;
      }
    }
    
  }


}

export class Beneficio {
  private nombre:String;
  private id:String;
  private plazas:String[];
  private validez:Date[];
  private tipo:String;
  private condicionesGenerales:String;
  private disponible:Boolean;
  private detalleSalas:String;

  constructor(nombre:String,id:String,plazas:String[],validez:Date[],tipo:String,condicionesGenerales:String, disponible:Boolean,detalleSalas:String) {
    this.nombre=nombre;
    this.id=id;
    this.plazas=plazas;
    this.validez=validez;
    this.tipo=tipo;
    this.condicionesGenerales=condicionesGenerales;
    this.disponible=disponible;
    this.detalleSalas=detalleSalas;
  }

  public setNombre(nombre:String){
    this.nombre=nombre;
  }
  public setId(id:String){
    this.id=id;
  }
  public setPlazas(plazas:String[]){
    this.plazas=plazas;
  }
  public setValidez(validez:Date[]){
    this.validez=validez;
  }
  public setTipo(tipo:String){
    this.tipo=tipo;
  }
  public setCondicionesGenerales(condicionesGenerales:String){
    this.condicionesGenerales=condicionesGenerales;
  }
  public setDisponible(disponible:Boolean){
    this.disponible=disponible;
  }
  public setDetalleSalas(detalleSalas:String){
    this.detalleSalas=detalleSalas;
  }

  public getNombre():String{return this.nombre;}
  public getId():String{return this.id;}
  public getPlazas():String[]{return this.plazas;}
  public getValidez():Date[]{return this.validez;}
  public getTipo():String{return this.tipo;}
  public getCondicionesGenerales():String{return this.condicionesGenerales;}
  public getDisponible():Boolean{return this.disponible;}
  public getDetalleSalas():String{return this.detalleSalas;}
}

/*export class Pelicula{
private nombre:String;
private id:String;
private fechaEstreno:Date;
private clasificacion:String;
private genero:String;
private horarios:String[];
private duracion:Number;
private resenia:String;
private directores:Array<String>;
private protagonistas:Array<String>;

constructor(nombre:String,id:String,fechaEstreno:Date,clasificacion:String,genero:String,horarios:String[],duracion:Number,resenia:String,directores:Array<String>,protagonistas:Array<String>){
  this.nombre=nombre;
  this.id=id;
  this.fechaEstreno=fechaEstreno;
  this.clasificacion=clasificacion;
  this.genero=genero;
  this.horarios=horarios;
  this.duracion=duracion;
  this.resenia=resenia;
  this.directores=directores;
  this.protagonistas=protagonistas;
}

public setNombre(nombre:String){
  this.nombre=nombre;
}
public setId(id:String){
  this.id=id;
}
public setFechaEstreno(fechaEstreno:Date){
  this.fechaEstreno=fechaEstreno;
}
public setClasificacion(clasificacion:String){
  this.clasificacion=clasificacion;
}
public setGenero(genero:String){
  this.genero=genero;
}
public setHorarios(horarios:String[]){
  this.horarios=horarios;
}
public setDuracion(duracion:Number){
  this.duracion=duracion;
}
public setResenia(resenia:String){
  this.resenia=resenia;
}

public getNombre():String{return this.nombre;}
public getId():String{return this.id;}
public getFechaEstreno():Date{return this.fechaEstreno;}
public getClasificacion():String{return this.clasificacion;}
public getGenero():String{return this.genero;}
public getHorarios():String[]{return this.horarios;}
public getDuracion():Number{return this.duracion;}
public getResenia():String{return this.resenia;}
public getDirectores():Array<String>{return this.directores;}
public getProtagonistas():Array<String>{return this.protagonistas;}
}*/

export interface Pelicula{
  
    ID_PELICULA:Number;
    NOMBRE:String;
    FECHAESTRENO:Date;
    CLASIFICACION:String;
    DURACION:Number;
    DISPONIBLE:{type:String, data:[]};
    ID_DIR1:Number;
    ID_DIR2:Number;
    ID_DISTRIBUIDORA:Number;
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