import { Basket } from './data.service';
import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service).toBeTruthy();
  });

  it('should calculate tax for an imported item', () => {
    const service: CalcService = TestBed.get(CalcService);
    const importedBasket: Basket =  {
      "name": "Test Basket",
      "items": [
        {
          "qty": 1,
          "title": "Vespa",
          "price": 15001.25,
          "category": "standard",
          "imported": true,
          "image": "https://i5.walmartimages.com/asr/e8af3b4c-b156-49af-8043-f689a0e72bda_1.7b232bf25a7a2a91730bc1393925d9ca.jpeg?odnWidth=100&odnHeight=100&odnBg=FFFFFF"
        }
      ]
    }
    expect((service.calcBasket(importedBasket)).tax).toEqual(2250.25)
  });

  it('should calculate tax for a standard item', () => {
    const service: CalcService = TestBed.get(CalcService);
    const standardBasket: Basket =  {
      "name": "Test Basket",
      "items": [
        {
          "qty": 1,
          "title": "Walkman",
          "price": 99.99,
          "category": "standard",
          "image": "https://i5.walmartimages.com/asr/e0d80df9-faf0-4798-b0cd-55b91556d0f8_1.bd2f3056c8698a5c3347e6eacbd15326.jpeg?odnWidth=100&odnHeight=100&odnBg=FFFFFF"
        },
      ]
    }
    expect((service.calcBasket(standardBasket)).tax).toEqual(10)
  });

  it('should calculate tax for a tax exempt item', () => {
    const service: CalcService = TestBed.get(CalcService);
    const exemptBasket: Basket =  {
      "name": "Test Basket",
      "items": [
        {
          "qty": 1,
          "title": "16lb bag of Skittles",
          "price": 16.00,
          "category": "exempt",
          "image": "https://i5.walmartimages.com/asr/0e839060-650a-4695-aea3-c8609cd5a64f_1.52d1d802ee580834321f2d5f2dc5e02b.jpeg?odnWidth=100&odnHeight=100&odnBg=FFFFFF"
        },
      ]
    }
    expect((service.calcBasket(exemptBasket)).tax).toEqual(0)
  });


});
