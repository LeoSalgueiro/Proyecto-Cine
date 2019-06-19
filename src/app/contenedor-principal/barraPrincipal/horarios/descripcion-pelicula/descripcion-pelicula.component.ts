import { Component, OnInit ,Input, OnChanges} from '@angular/core';
import { Pelicula, Pelicula_class } from 'src/app/bd/bd.component';

@Component({
  selector: 'app-descripcion-pelicula',
  templateUrl: './descripcion-pelicula.component.html',
  styleUrls: ['./descripcion-pelicula.component.css']
})
export class DescripcionPeliculaComponent implements OnInit {

 
  @Input() pelicula: Pelicula;


  constructor() { }

  ngOnInit() {
    this.pelicula;
  }

 

}
