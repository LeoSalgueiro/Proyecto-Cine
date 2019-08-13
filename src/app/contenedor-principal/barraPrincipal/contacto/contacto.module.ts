import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestorConsultaService } from './../../../modelo/gestor-consulta.service';
import { GestorPersonaService } from './../../../modelo/gestor-persona.service';
import { GestorCiudadService } from './../../../modelo/gestor-ciudad.service';

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule],
  providers: [GestorConsultaService,GestorPersonaService,GestorCiudadService],//voy a usar el servicio
})
export class ContactoModule { }
