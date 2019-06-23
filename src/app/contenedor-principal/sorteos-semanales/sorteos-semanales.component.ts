import { Component, OnInit } from '@angular/core';
import { Cartelera, Pelicula } from 'src/app/bd/bd.component';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import { Subscription, Observable } from 'rxjs';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sorteos-semanales',
  templateUrl: './sorteos-semanales.component.html',
  styleUrls: ['./sorteos-semanales.component.css']
})
export class SorteosSemanalesComponent implements OnInit {
  

    constructor(private conector:APIControllersService, private router: Router) {
    
    
    }

    ngOnInit() {   
    }

 





}