import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  private precio3D_promo:number=170;
  private precio2D_promo:number=160;
  private precio3D_general:number=250;
  private precio2D_general:number=240;
  constructor() { }

  ngOnInit() {
  }

}
