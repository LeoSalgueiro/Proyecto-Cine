import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPrincipalComponent } from './ficha-principal.component';

describe('FichaPrincipalComponent', () => {
  let component: FichaPrincipalComponent;
  let fixture: ComponentFixture<FichaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
