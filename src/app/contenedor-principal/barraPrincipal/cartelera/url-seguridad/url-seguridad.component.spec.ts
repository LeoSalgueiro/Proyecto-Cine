import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSeguridadComponent } from './url-seguridad.component';

describe('UrlSeguridadComponent', () => {
  let component: UrlSeguridadComponent;
  let fixture: ComponentFixture<UrlSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
