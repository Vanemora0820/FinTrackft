import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosComponent } from './presupuestos.component';

describe('PresupuestosComponent', () => {
  let component: PresupuestosComponent;
  let fixture: ComponentFixture<PresupuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresupuestosComponent]
    });
    fixture = TestBed.createComponent(PresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
