import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import { Subscription, Observable } from 'rxjs';
import {FormParticipante} from './suscriptor.model';
import{FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
import{NgModule} from '@angular/core';



@Component({
  selector: 'app-sorteos-semanales',
  templateUrl: './sorteos-semanales.component.html',
  styleUrls: ['./sorteos-semanales.component.css']
})

@NgModule({

  imports : [FormsModule, NgForm]

})

export class SorteosSemanalesComponent implements OnInit {
  bandera: number;
  datos: String;
  private participantes:any[];
  private existeParticipante:any[];
  participante : FormParticipante = {

    NOMBRE: '',
    EMAIL: '', 
    CIUDAD: '',
    UTDDNI: '',      //Ultimos Tres Digitos DNI
    ID_RESPUESTA: '',};  //ID respuesta
    
    constructor(private conector:APIControllersService, private router: Router) {
      this.conector.getParticipante().subscribe(res => {this.existeParticipante = res});
    }

    ngOnInit() {   
    }
 
    enviarFormulario(formC:NgForm){
      this.bandera=0;
      for(var d of this.existeParticipante){
          var myjson = JSON.stringify(d);
          let emil = myjson.split(':'); //toma del json solo la parte del mail
          console.log(this.participante.EMAIL);
         if(emil[1].substring(1, emil[1].length-2) == this.participante.EMAIL){
            this.bandera=1;
            alert('Este mail ya se encuentra registrado en el sorteo semanal');
            
            break;
          }
        
      }
      //this.bandera=0;
      if(this.bandera==0){
 
          this.conector.guardarParticipante(this.participante).subscribe(res => {this.existeParticipante = res; console.log(res);});
          err => console.log(err)
          alert('¡Se ha suscripto correctamente!');
          formC.reset();
      }
      
    }
}


  

 





