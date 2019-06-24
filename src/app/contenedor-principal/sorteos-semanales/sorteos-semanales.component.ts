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
  private existeP:any[];
  private existeParticipante:any[];
  participante : FormParticipante = {

    NOMBRE: '',
    EMAIL: '', 
    CIUDAD: '',
    UTDDNI: '',      //Ultimos Tres Digitos DNI
    ID_RESPUESTA: '',};  //ID respuesta
    
    constructor(private conector:APIControllersService, private router: Router) {

    }

    ngOnInit() {   
    }

  enviarFormulario(formC:NgForm){
    
    //console.log(this.formulario);
    // formulario es un objeto de la clase  Empresa
    //this.conector.existeParticipante(this.participante.EMAIL).subscribe(res => {this.existeParticipante=res;})

    this.conector.guardarParticipante(this.participante).subscribe(res => console.log(res));
    err => console.log(err);
    console.log(this.participante);
    console.log(this.participante.EMAIL);
    console.log(this.participante.ID_RESPUESTA);
    console.log(this.participante.NOMBRE);
    console.log(this.participante.UTDDNI);
    console.log(this.participante.CIUDAD);
    alert('¡Se ha suscripto correctamente!');
    //formC.reset();
  }
}


  

 





