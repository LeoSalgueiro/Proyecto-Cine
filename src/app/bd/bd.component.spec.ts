import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDComponent } from './bd.component';

describe('BDComponent', () => {
  let component: BDComponent;
  let fixture: ComponentFixture<BDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
