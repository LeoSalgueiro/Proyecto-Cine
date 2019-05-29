import { Component, OnInit } from '@angular/core';
import { Pelicula, BDComponent } from 'src/app/bd/bd.component';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  private peliculas:Array<Pelicula>;

  constructor(private bd: BDComponent) { }

  ngOnInit() {
    this.obtenerPeliculas();
  }

  public obtenerPeliculas(){
    this.peliculas=this.bd.getPeliculas();
  }

}
