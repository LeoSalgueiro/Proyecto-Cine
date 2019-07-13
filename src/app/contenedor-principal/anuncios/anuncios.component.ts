import { Component, AfterViewInit } from '@angular/core';
import { APIControllersService } from 'src/app/APIControllers/apicontrollers.service';
declare var $: any;
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements AfterViewInit  {
  private hoy=new Date();
  private peliculas:any[];
  constructor(private conector:APIControllersService) {
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
   ngAfterViewInit() {
      $('#myCarousel').carousel({  cycle: true });
    }

verPelicula(){
  console.log("metodo");
}

}
