import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zoom1Component } from './zoom1.component';

describe('Zoom1Component', () => {
  let component: Zoom1Component;
  let fixture: ComponentFixture<Zoom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zoom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zoom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
