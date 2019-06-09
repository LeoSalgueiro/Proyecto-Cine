import { Component, OnInit } from '@angular/core';
import { Cartelera } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';



@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  private carteleraActual:Cartelera;
  private hoy:Date;
  arreglo:any[];
  constructor(private conector:APIControllersService) {
    this.hoy=new Date();
    
  }

  ngOnInit() {
    this.conector.ObtenerCartelera(this.calcularPeriodo(this.hoy)).subscribe(res => {this.arreglo = res; });
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
    console.log(fecha);
    return fecha;
  }

}
