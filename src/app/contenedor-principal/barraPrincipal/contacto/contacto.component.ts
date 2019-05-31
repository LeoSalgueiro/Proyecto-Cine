import { Component, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnDestroy  {
  
   constructor() {
    document.getElementById("container_princ").style.background="#f3f3f3";
  }

ngOnDestroy(){
    document.getElementById("container_princ").style.background="white";
  }

}
