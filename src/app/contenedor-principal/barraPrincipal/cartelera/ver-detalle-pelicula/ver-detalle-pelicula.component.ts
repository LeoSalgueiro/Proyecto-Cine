import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APIControllersService} from '../../../../APIControllers/apicontrollers.service';
@Component({
  selector: 'app-ver-detalle-pelicula',
  templateUrl: './ver-detalle-pelicula.component.html',
  styleUrls: ['./ver-detalle-pelicula.component.css']
})
export class VerDetallePeliculaComponent implements OnInit {
  private idPelicula:number;
  private hoy:Date;
  private var:string="https://www.youtube.com/embed/watch?v=1irrY_SSIew";
  private pelicula:any[];
  constructor(private route:ActivatedRoute, private conector:APIControllersService) { }
  private meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  private diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

  ngOnInit() {
    this.hoy=new Date();
    this.idPelicula=parseInt(this.route.snapshot.paramMap.get('id'));
    this.conector.BuscarPelicula(this.idPelicula).subscribe(res=>{this.pelicula=res});
    
  }

}
