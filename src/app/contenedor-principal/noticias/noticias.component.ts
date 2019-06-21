import { Component, OnInit } from '@angular/core';
import {Persona} from './suscriptor.model';
import {Suscriptor} from './suscriptor.model';
import { APIControllersService } from '../../APIControllers/apicontrollers.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  private persona:Persona;
  private suscriptor:Suscriptor;
  private personas:any[];
  private suscriptores:any[];
  constructor(private conector:APIControllersService) { }

  ngOnInit() {
  }

  public enviarSuscripcion(){
    /*this.conector.existePersona(this.persona.EMAIL).suscribe(res=> {this.personas=res});
    if (this.personas[0]==0){
      this.conector.agregarPersona(this.persona);
      this.conector.agregarSuscriptor(this.suscriptor);
    }
    else{
      this.conector.agregarSuscriptor(this.suscriptor);
    }*/



  }
}
