import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './contenedor-principal/barraSuperior/inicio/inicio.component';
import { EmpresaComponent } from './contenedor-principal/barraSuperior/empresa/empresa.component';
import { ComplejosComponent } from './contenedor-principal/barraSuperior/complejos/complejos.component';
import { MarketingComponent } from './contenedor-principal/barraSuperior/marketing/marketing.component';
import { CalificacionesComponent } from './contenedor-principal/barraSuperior/calificaciones/calificaciones.component';
import { ConsideracionesGeneralesComponent } from './contenedor-principal/barraSuperior/consideraciones-generales/consideraciones-generales.component';
import { CarteleraComponent } from './contenedor-principal/barraPrincipal/cartelera/cartelera.component';
import { HorariosComponent } from './contenedor-principal/barraPrincipal/horarios/horarios.component';
import { ProximosEstrenosComponent } from './contenedor-principal/barraPrincipal/proximos-estrenos/proximos-estrenos.component';
import { PreciosComponent } from './contenedor-principal/barraPrincipal/precios/precios.component';
import { SupercombosComponent } from './contenedor-principal/barraPrincipal/supercombos/supercombos.component';
import { ContactoComponent } from './contenedor-principal/barraPrincipal/contacto/contacto.component';
import { RecursosHumanosComponent } from './contenedor-principal/barraSuperior/recursos-humanos/recursos-humanos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarPrincipalComponent } from './nav-bar-principal/nav-bar-principal.component';
import { NavBarSuperiorComponent } from './nav-bar-superior/nav-bar-superior.component';
import { AnunciosComponent } from './contenedor-principal/anuncios/anuncios.component';
import { FichaComponent } from './contenedor-principal/ficha/ficha.component';
import { BarraLateralComponent } from './contenedor-principal/barra-lateral/barra-lateral.component';
import { FichaPrincipalComponent } from './ficha-principal/ficha-principal.component';
import { BeneficiosComponent } from './contenedor-principal/beneficios/beneficios.component';
import { NoticiasComponent } from './contenedor-principal/noticias/noticias.component';

import { ControllerApiComponent } from './controller-api/controller-api.component';
import { APIControllersService } from './APIControllers/apicontrollers.service';
import { HttpClientModule } from '@angular/common/http';
import { DescripcionPeliculaComponent } from './contenedor-principal/barraPrincipal/horarios/descripcion-pelicula/descripcion-pelicula.component';
import { VerHorarioComponent } from './contenedor-principal/barraPrincipal/horarios/ver-horario/ver-horario.component';
import { VerDetallePeliculaComponent } from './contenedor-principal/barraPrincipal/cartelera/ver-detalle-pelicula/ver-detalle-pelicula.component';
import { EliminarDatosComponent } from './contenedor-principal/noticias/eliminar-datos/eliminar-datos.component';
import { UrlSeguridadComponent } from './contenedor-principal/barraPrincipal/cartelera/url-seguridad/url-seguridad.component';
import { SorteosSemanalesComponent } from './contenedor-principal/sorteos-semanales/sorteos-semanales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    EmpresaComponent,
    ComplejosComponent,
    MarketingComponent,
    CalificacionesComponent,
    ConsideracionesGeneralesComponent,
    CarteleraComponent,
    HorariosComponent,
    ProximosEstrenosComponent,
    PreciosComponent,
    SupercombosComponent,
    ContactoComponent,
    RecursosHumanosComponent,
    PageNotFoundComponent,
    NavBarPrincipalComponent,
    NavBarSuperiorComponent,
    AnunciosComponent,
    FichaComponent,
    BarraLateralComponent,
    FichaPrincipalComponent,
    BeneficiosComponent,
    NoticiasComponent,
    ControllerApiComponent,
    DescripcionPeliculaComponent,
    VerHorarioComponent,
    VerDetallePeliculaComponent,
    EliminarDatosComponent,
    UrlSeguridadComponent,
    SorteosSemanalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
],
  providers: [APIControllersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
