import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-supercombos',
  templateUrl: './supercombos.component.html',
  styleUrls: ['./supercombos.component.css']
})
export class SupercombosComponent implements OnInit {

  private combos:any[];


  constructor(private conector:APIControllersService) { }

  ngOnInit() {
    this.conector.ObtenerCombosDisponibles("San Luis").subscribe(res => {this.combos=res});
  }

}
