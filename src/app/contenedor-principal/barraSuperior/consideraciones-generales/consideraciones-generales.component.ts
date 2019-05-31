import { Component, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-consideraciones-generales',
  templateUrl: './consideraciones-generales.component.html',
  styleUrls: ['./consideraciones-generales.component.css']
})
export class ConsideracionesGeneralesComponent implements OnDestroy  {

  constructor() {
    document.getElementById("container_princ").style.background="#f3f3f3";
  }

ngOnDestroy(){
    document.getElementById("container_princ").style.background="white";
  }

}
