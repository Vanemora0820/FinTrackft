import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginserviceComponent } from './loginservice.component';

describe('LoginserviceComponent', () => {
  let component: LoginserviceComponent;
  let fixture: ComponentFixture<LoginserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginserviceComponent]
    });
    fixture = TestBed.createComponent(LoginserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
