import { Component, OnInit } from '@angular/core';
import { BDComponent, Beneficio } from 'src/app/bd/bd.component';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  private beneficios:Array<Beneficio>;
  constructor(private bd:BDComponent) { }

  ngOnInit() {
    this.obtenerBeneficios();
  }

  obtenerBeneficios(){
    this.beneficios=this.bd.getBeneficios();
  }

}