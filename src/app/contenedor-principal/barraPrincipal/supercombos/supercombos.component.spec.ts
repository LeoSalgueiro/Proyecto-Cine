import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercombosComponent } from './supercombos.component';

describe('SupercombosComponent', () => {
  let component: SupercombosComponent;
  let fixture: ComponentFixture<SupercombosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercombosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
