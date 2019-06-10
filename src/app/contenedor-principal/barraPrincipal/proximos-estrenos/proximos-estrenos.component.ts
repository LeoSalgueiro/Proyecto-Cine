import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-proximos-estrenos',
  templateUrl: './proximos-estrenos.component.html',
  styleUrls: ['./proximos-estrenos.component.css']
})
export class ProximosEstrenosComponent implements OnInit {

  private hoy:Date;
  private proxEstrenos: any[];


  constructor(private conector:APIControllersService) { 
    this.hoy=new Date();
  }

  ngOnInit() {
    this.conector.BuscarProximosEstrenos(this.FechaHoy(this.hoy)).subscribe(res =>{this.proxEstrenos = res; });
  }

  FechaHoy(hoy:Date):String{
    let fecha:String;
    
    fecha=hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate();
    return fecha;
  }

}
