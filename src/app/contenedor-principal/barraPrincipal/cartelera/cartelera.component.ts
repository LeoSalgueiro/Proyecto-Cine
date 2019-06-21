import { Component, OnInit } from '@angular/core';
import { Cartelera, Pelicula } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
import { Subscription, Observable } from 'rxjs';
import {Router} from '@angular/router';



@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  private carteleraActual:Cartelera;
  private hoy:Date;
  private peliculas:any[];

    constructor(private conector:APIControllersService, private router: Router) {
    this.hoy=new Date();
    
  }

  ngOnInit() {
    this.obtenerCartelera();
    
  }

  obtenerCartelera(){
    this.conector.ObtenerCartelera(this.calcularPeriodo(this.hoy)).subscribe(res => {this.peliculas=res;});
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

  peliculaSeleccionada(pelicula:any){
    this.router.navigate(['/peliculas-en-cartelera',pelicula.ID_PELICULA]);
  }

}