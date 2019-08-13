import { Component, OnInit } from '@angular/core';
import { Beneficio } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  private beneficios:any[]=[];

  constructor(private conector:APIControllersService) { }

  ngOnInit() {
    this.obtenerBeneficios();

    
  }

  obtenerBeneficios(){
    this.conector.BuscarBeneficiosDisponibles().subscribe(res => {this.beneficios = res; });
    
  }

}