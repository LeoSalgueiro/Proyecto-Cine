import { Component, OnInit } from '@angular/core';
import { Datos } from './datos.model';
import { NgForm } from '@angular/forms';
import { APIControllersService } from 'src/app/APIControllers/apicontrollers.service';

@Component({
  selector: 'app-eliminar-datos',
  templateUrl: './eliminar-datos.component.html',
  styleUrls: ['./eliminar-datos.component.css']
})
export class EliminarDatosComponent implements OnInit {
private datos:Datos={
  EMAIL:'',
  DNI:0
}

private existeS:any[];
  constructor(private conector:APIControllersService) { }

  ngOnInit() {
  }

  eliminarSuscripcion(form:NgForm){
    console.log(this.datos.EMAIL);
    this.conector.existeSuscriptor(this.datos.EMAIL).subscribe(res => {
      let resultado=JSON.stringify(res);
      let numero= Number.parseInt(resultado.slice(17,18));
      if (numero==0){
        console.log("no existen suscriptores con ese email");
        
        }

      else {
        if (confirm("¿Está seguro que desea eliminar su suscripción?")){
          this.conector.borrarSuscriptor(this.datos.EMAIL).subscribe(res=> {
            console.log("Suscriptor eliminado")});
            this.conector.borrarPersona(this.datos.EMAIL).subscribe(res=>{console.log("Persona eliminada.");});
            alert("Datos eliminados");
            form.reset();
        }
        else {
          alert("Operación cancelada");
        }
        
      }
      
    });

  }

}
