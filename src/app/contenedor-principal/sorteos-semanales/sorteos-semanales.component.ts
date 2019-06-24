import { Component, OnInit } from '@angular/core';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import { Subscription, Observable } from 'rxjs';
import {formParticipante} from './suscriptor.model';
import{FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';



@Component({
  selector: 'app-sorteos-semanales',
  templateUrl: './sorteos-semanales.component.html',
  styleUrls: ['./sorteos-semanales.component.css']
})
export class SorteosSemanalesComponent implements OnInit {
  bandera: number;
  private existeP:any[];
  private existeParticipante:any[];
  participante : formParticipante = {

    NOMBRE: '',
    EMAIL: '',
    CIUDAD: '',
    UTDDNI: 0,      //Ultimos Tres Digitos DNI
    ID_RES: 0,};  //ID respuesta
    
    constructor(private conector:APIControllersService, private router: Router) {

    }

    ngOnInit() {   
    }

  enviarFormulario(formC:NgForm){
    
   let participante : formParticipante = {
    NOMBRE: this.participante.NOMBRE,
    EMAIL: this.participante.EMAIL,
    CIUDAD: this.participante.CIUDAD,
    UTDDNI: this.participante.UTDDNI,
    ID_RES: this.participante.ID_RES,};

    //console.log(this.formulario);
    // formulario es un objeto de la clase  Empresa
    this.conector.existeParticipante(this.participante.EMAIL).subscribe(res => {this.existeParticipante=res;})

    this.conector.guardarParticipante(this.participante).subscribe(res => console.log(res));
    err => console.log(err);
    alert('¡Se ha suscripto correctamente!');
    formC.reset();
  }
}


  

 





