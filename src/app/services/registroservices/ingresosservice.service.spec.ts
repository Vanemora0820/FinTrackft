import { TestBed } from '@angular/core/testing';

import { IngresosserviceService } from './ingresosservice.service';

describe('IngresosserviceService', () => {
  let service: IngresosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
