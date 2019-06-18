import { Component, OnInit } from '@angular/core';
import {CarteleraComponent} from '../../../contenedor-principal/barraPrincipal/cartelera/cartelera.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import { Cartelera, Pelicula, Pelicula_class, Transmiten } from 'src/app/bd/bd.component';
import{FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})

export class HorariosComponent implements OnInit {
  private carteleraActual:Cartelera;
  private hoy:Date;
  private peliculas:any[];
  pelicula: Pelicula;
 nombre : string;
 //transmiten: Transmiten;
 private transmiten:any;

    constructor(private conector:APIControllersService) {
    this.hoy=new Date();
    

    
  }

  ngOnInit() {
    this.obtenerCartelera();

  }

  obtenerCartelera(){
    this.conector.ObtenerCartelera(this.calcularPeriodo(this.hoy)).subscribe(res => {this.peliculas=res;});
    this.conector.getTransmision("4").subscribe(res => {this.transmiten=res;});
   // console.log(this.transmiten.HORARIOS);

 
   
  }



  seleccionar(peli){
this.pelicula = {
  ID_PELICULA: peli.ID_PELICULA,
  NOMBRE:  peli.NOMBRE,
  ID_DIR1:  peli.ID_DIR1,
  ID_DIR2:  peli.ID_DIR2,
  FECHAESTRENO: peli.FECHAESTRENO,
  DISPONIBLE: peli.DISPONIBLE,
  DURACION: peli.DURACION,
  CLASIFICACION: peli.CLASIFICACION,
  ID_DISTRIBUIDORA: peli.ID_DISTRIBUIDORA,
  GENERO: peli.GENERO,
  RESENIA: peli.RESENIA
  
  
};


   
  
}

seHizoClick(){
  if(this.pelicula === undefined)return false;
  else{
  
    return true;
  }
}


  calcularPeriodo(hoy:Date):String{
    let diaSemana:number=hoy.getDay();
    let diasRestantes:number;
    let fechaFin:Date=new Date();
    let fecha:String;
    if (diaSemana<=3){
      diasRestantes=3-diaSemana;
      //console.log(diaSemana + "restante: "+diasRestantes);
    }
    else{
      diasRestantes=10-diaSemana;
      //console.log(diaSemana + "restante: "+diasRestantes);
    }
    fechaFin.setDate(hoy.getDate()+diasRestantes);
    fecha=fechaFin.getFullYear()+"-"+(fechaFin.getMonth()+1)+"-"+fechaFin.getDate();
    return fecha;
  }

 
}