import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-supercombos',
  templateUrl: './supercombos.component.html',
  styleUrls: ['./supercombos.component.css']
})
export class SupercombosComponent implements OnInit {

  constructor(private conector:APIControllersService) { }

  ngOnInit() {
    
  }

}
