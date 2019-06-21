import { Component, OnInit } from '@angular/core';
import {formPersona, formSuscriptor, formSusCompleto} from './suscriptor.model';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import{FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  private existeP:any[];
  private existeS:any[];
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
      DOC: 0,
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
    //console.log(this.formulario);
    // formulario es un objeto de la clase  Empresa
    this.conector.existeSuscriptor(this.suscriptor.EMAIL).subscribe(res => {this.existeS=res;});
    this.conector.existePersona(this.persona.EMAIL).subscribe(res => {this.existeP=res;});
    //if (existe){}
    
    this.conector.guardarSuscriptor(this.suscriptor).subscribe(res => console.log(res));
    this.conector.guardarPersona(this.persona).subscribe(res => console.log(res));
    err => console.log(err);
    alert('¡Se ha suscripto correctamente!');

    formC.reset();
    
  


  }
}
