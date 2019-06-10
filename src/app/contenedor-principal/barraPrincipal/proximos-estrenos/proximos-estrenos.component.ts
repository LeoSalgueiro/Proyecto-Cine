import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-proximos-estrenos',
  templateUrl: './proximos-estrenos.component.html',
  styleUrls: ['./proximos-estrenos.component.css']
})
export class ProximosEstrenosComponent implements OnInit {

  constructor(private conector:APIControllersService) { }

  ngOnInit() {
  }

}
