import { Component,  AfterViewInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements AfterViewInit {

  constructor() { }

 
  ngAfterViewInit() {
       $('#myCarousel2').carousel({  cycle: true });
    }

}
