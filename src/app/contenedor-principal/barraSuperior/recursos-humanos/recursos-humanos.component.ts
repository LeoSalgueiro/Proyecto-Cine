import { Component, OnInit } from '@angular/core';
import { Solicitud } from './solicitud.model';
import { ImplicitReceiver } from '@angular/compiler';




@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.component.html',
  styleUrls: ['./recursos-humanos.component.css']
})
export class RecursosHumanosComponent implements OnInit {

 

  model = new Solicitud('','','','', '','',["San Luis, Mendoza"], '','','','','');
  constructor() { }

  ngOnInit() {
  }

  get currentSolicitud(){
    return JSON.stringify(this.model)
  }

}
