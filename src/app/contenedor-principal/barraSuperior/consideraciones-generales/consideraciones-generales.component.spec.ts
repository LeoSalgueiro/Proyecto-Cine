import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsideracionesGeneralesComponent } from './consideraciones-generales.component';

describe('ConsideracionesGeneralesComponent', () => {
  let component: ConsideracionesGeneralesComponent;
  let fixture: ComponentFixture<ConsideracionesGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsideracionesGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsideracionesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
