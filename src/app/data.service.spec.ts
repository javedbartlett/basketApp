import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should have 3 baskets', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getBasketNames().length).toBe(3);
  });

  it('should have 3 tax rules', () => {
    const service: DataService = TestBed.get(DataService);
    expect(Object.keys(service.getTaxRules()).length).toBe(3);
  });

});
