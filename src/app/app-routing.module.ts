import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './contenedor-principal/barraSuperior/inicio/inicio.component';
import { EmpresaComponent } from './contenedor-principal/barraSuperior/empresa/empresa.component';
import { ComplejosComponent } from './contenedor-principal/barraSuperior/complejos/complejos.component';
import { MarketingComponent } from './contenedor-principal/barraSuperior/marketing/marketing.component';
import { CalificacionesComponent } from './contenedor-principal/barraSuperior/calificaciones/calificaciones.component';
import { ConsideracionesGeneralesComponent } from './contenedor-principal/barraSuperior/consideraciones-generales/consideraciones-generales.component';
import { CarteleraComponent } from './contenedor-principal/barraPrincipal/cartelera/cartelera.component';
import { ProximosEstrenosComponent } from './contenedor-principal/barraPrincipal/proximos-estrenos/proximos-estrenos.component';
import { HorariosComponent } from './contenedor-principal/barraPrincipal/horarios/horarios.component';
import { PreciosComponent } from './contenedor-principal/barraPrincipal/precios/precios.component';
import { SupercombosComponent } from './contenedor-principal/barraPrincipal/supercombos/supercombos.component';
import { ContactoComponent } from './contenedor-principal/barraPrincipal/contacto/contacto.component';
import { RecursosHumanosComponent } from './contenedor-principal/barraSuperior/recursos-humanos/recursos-humanos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BeneficiosComponent } from './contenedor-principal/beneficios/beneficios.component';
import { NoticiasComponent } from './contenedor-principal/noticias/noticias.component';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},//barra de navegación pequeña
  {path:"empresa", component:EmpresaComponent},//barra de navegación pequeña
  {path:"complejos", component:ComplejosComponent},//barra de navegación pequeña
  {path:"marketing", component:MarketingComponent},//barra de navegación pequeña
  {path:"recursos-humanos", component:RecursosHumanosComponent},//barra de navegación pequeña
  {path:"calificaciones", component:CalificacionesComponent},//barra de navegación pequeña
  {path:"consideraciones-generales", component:ConsideracionesGeneralesComponent},//barra de navegación pequeña
  {path:"peliculas-en-cartelera", component:CarteleraComponent},//barra de navegación principal
  {path:"horarios", component:HorariosComponent},//barra de navegación principal
  {path:"proximos-estrenos", component:ProximosEstrenosComponent},//barra de navegación principal
  {path:"precios", component:PreciosComponent},//barra de navegación principal
  {path:"supercombos", component:SupercombosComponent},//barra de navegación principal
  {path:"contacto", component:ContactoComponent},//barra de navegación principal
  {path:"beneficios", component:BeneficiosComponent},//banner
  {path:"noticias", component:NoticiasComponent},//banner
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
