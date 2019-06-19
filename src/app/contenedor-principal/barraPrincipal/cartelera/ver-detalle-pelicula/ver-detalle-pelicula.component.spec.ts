import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetallePeliculaComponent } from './ver-detalle-pelicula.component';

describe('VerDetallePeliculaComponent', () => {
  let component: VerDetallePeliculaComponent;
  let fixture: ComponentFixture<VerDetallePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetallePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
