import { Component, OnInit } from '@angular/core';
import {formPersona, formSuscriptor, formSusCompleto} from './suscriptor.model';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import{ NgForm} from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  private existeP:any[];
  private existeS:any[];
  private generos:string[]=["Femenino","Masculino","Otro"];
  private opciones:string[]=["Amigos","Familia","Pareja","Solo/a"];
  
  suscriptor : formSuscriptor = {
    EMAIL: '',
    PROFESION: '',
    ACOMPANIANTE: '',
    ID_DF: 0,
    HORARIO: '',
    SEXO: ''};

    persona:formPersona={
      DOC: 0,
      TIPO_DOC:'DNI',
      NOMBRE: '',
      APELLIDO: '',
      EMAIL: '',
      FECHA_NAC: null,
      TELEFONO: '',
      PERSONA_TIPO:'suscriptor'
    }

    completo:formSusCompleto={
      DOC: null,
      TIPO_DOC:'DNI',
      NOMBRE: '',
      APELLIDO: '',
      EMAIL: '',
      FECHA_NAC: null,
      TELEFONO: '',
      PERSONA_TIPO:'suscriptor',
      PROFESION: '',
      ACOMPANIANTE: '',
      ID_DF: 0,
      HORARIO: '',
      SEXO: ''};

  constructor(private conector:APIControllersService) { }

  ngOnInit() {
  }


  enviarFormulario(formC:NgForm){
    
    let suscriptor : formSuscriptor = {
    EMAIL: this.completo.EMAIL,
    PROFESION: this.completo.PROFESION,
    ACOMPANIANTE: this.completo.ACOMPANIANTE,
    ID_DF: this.completo.ID_DF,
    HORARIO: this.completo.HORARIO,
    SEXO: this.completo.SEXO};

    let persona:formPersona={
      DOC: this.completo.DOC,
      TIPO_DOC:'DNI',
      NOMBRE: this.completo.NOMBRE,
      APELLIDO: this.completo.APELLIDO,
      EMAIL: this.completo.EMAIL,
      FECHA_NAC: this.completo.FECHA_NAC,
      TELEFONO: this.completo.TELEFONO,
      PERSONA_TIPO:'suscriptor'
    }
    
    console.log(suscriptor.EMAIL);
    this.conector.existeSuscriptor(suscriptor.EMAIL).subscribe(res => {
      let resultado=JSON.stringify(res);
      let numero= Number.parseInt(resultado.slice(17,18));
      if (numero==0){
        console.log("no existen suscriptores con ese email");
        this.conector.guardarPersona(persona).subscribe(res => {
          console.log("guardar ahora suscriptor");
          this.conector.guardarSuscriptor(suscriptor).subscribe(res => console.log(res));
          alert("Sus datos han sido registrados con éxito. ¡Gracias!");
          formC.reset();
        });

      }
      else {
        alert("El mail ya se encuentra registrado como suscriptor. Intente con otro mail.");
      }
      
    });


  }
}
