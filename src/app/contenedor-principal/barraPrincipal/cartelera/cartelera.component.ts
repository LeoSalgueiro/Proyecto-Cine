import { Component, OnInit } from '@angular/core';
import { Cartelera, BDComponent } from 'src/app/bd/bd.component';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  private carteleraActual:Cartelera;
  private hoy:Date;
  
  constructor(private bd: BDComponent) {
    this.hoy=new Date();
    console.log(this.hoy.toDateString());
  }

  ngOnInit() {
    this.carteleraActual=this.bd.obtenerCartelera(this.calcularPeriodo(this.hoy));
  }

  calcularPeriodo(hoy:Date):Date{
    let diaSemana:number=hoy.getDay();
    let diasRestantes:number;
    let fechaFin:Date=new Date();
    if (diaSemana<=3){
      diasRestantes=3-diaSemana;
      //console.log(diaSemana + "restante: "+diasRestantes);
    }
    else{
      diasRestantes=10-diaSemana;
      //console.log(diaSemana + "restante: "+diasRestantes);
    }
    fechaFin.setDate(hoy.getDate()+diasRestantes);
    
    return fechaFin;
  }

}
