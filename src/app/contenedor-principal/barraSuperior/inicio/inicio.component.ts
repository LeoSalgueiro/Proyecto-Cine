import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit ,AfterViewInit{
private combos:any[];
  constructor(private conector:APIControllersService) { }

  ngOnInit() {
      this.conector.ObtenerCombosDisponibles("San Luis").subscribe(res => {this.combos=res})
  }
  ngAfterViewInit() {
      $('#myCarousel_combos').carousel({  cycle: true });
    }
counter(i: number) {
    return new Array(i);
}
}
