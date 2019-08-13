import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPeliculaComponent } from './descripcion-pelicula.component';

describe('DescripcionPeliculaComponent', () => {
  let component: DescripcionPeliculaComponent;
  let fixture: ComponentFixture<DescripcionPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
