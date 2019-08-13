import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})

export class HorariosComponent implements OnInit {
private peliculas:any[];
private pelicula:any[];
private horarios:any[];

private hoy:Date;
  constructor(private conector:APIControllersService){}

  ngOnInit(){
    this.hoy=new Date();
    let fecha:String=this.calcularPeriodo(this.hoy);
    this.conector.ObtenerCartelera(fecha).subscribe(res=> {this.peliculas=res;});
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

  peliculaSeleccionada(id:number){
    this.conector.getTransmision(id).subscribe(res=> {this.horarios=res;});
    this.conector.BuscarPelicula(id).subscribe(res=>{this.pelicula=res;});
  }

}