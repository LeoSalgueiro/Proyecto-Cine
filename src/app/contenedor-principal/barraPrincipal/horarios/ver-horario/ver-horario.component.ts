import { Component, OnInit, Input } from '@angular/core';
import { Pelicula, Transmiten } from 'src/app/bd/bd.component';

import { APIControllersService } from '../../../../APIControllers/apicontrollers.service';

@Component({
  selector: 'app-ver-horario',
  templateUrl: './ver-horario.component.html',
  styleUrls: ['./ver-horario.component.css']
})
export class VerHorarioComponent implements OnInit {

  @Input() horarios: any; // A PARTIR DE SU IDE BUSCO EN LA TABLA TRANSMITEN SU HORARIO

  constructor(private conector:APIControllersService) {
  

   }

  ngOnInit() {
   
  }

  obtenertransmision(){
  

      //this.conector.getTransmision(this.pelicula.ID_PELICULA).subscribe(res => {this.transmiten=res;});
     
   

}
}
