import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements AfterViewInit  {
  
  constructor() { }

   ngAfterViewInit() {
      $('#myCarousel').carousel({  cycle: true });
    }

}
