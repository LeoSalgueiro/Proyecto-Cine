import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ficha-principal',
  templateUrl: './ficha-principal.component.html',
  styleUrls: ['./ficha-principal.component.css']
})
export class FichaPrincipalComponent implements OnInit {
@Input() texto_rojo:string;
@Input() texto_negro:string;
@Input() texto_light:string;
  constructor() { }

  ngOnInit() {
  }

}
