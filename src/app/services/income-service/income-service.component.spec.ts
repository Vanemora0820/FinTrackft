import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeServiceComponent } from './income-service.component';

describe('IncomeServiceComponent', () => {
  let component: IncomeServiceComponent;
  let fixture: ComponentFixture<IncomeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeServiceComponent]
    });
    fixture = TestBed.createComponent(IncomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
