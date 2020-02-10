import { Injectable } from '@angular/core';
import {Basket, DataService, Item} from './data.service';
import { each, get, cloneDeep } from 'lodash';

export interface ItemCalculated extends Item {
  tax: number;
  total: number;
}

export interface BasketCalculated extends Basket {
  tax?: number;
  total?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  private taxRules; // : { import: number; standard: number; exempt: number };

  constructor(public dataService: DataService) {
    this.taxRules = this.dataService.getTaxRules();
  }

  roundUp(num: number, scale: number= 1) {
    return (Math.ceil(num * (1 / scale)) / (1 / scale));
  }


  calcBasket(basket: Basket): BasketCalculated {
    // take each item and calculate the tax then put total tax in Basket
    let importRate = get(this.taxRules, 'import', 0);
    let calculated: BasketCalculated = cloneDeep(basket);
    calculated.tax = 0;
    calculated.total = 0;

    each(calculated.items, (item: ItemCalculated) => {
      // Get tax rates
      const srate =  get(this.taxRules, item.category);
      const irate = item.imported ? importRate : 0;

      // Calc sales rate
      item.tax = this.roundUp(item.qty * item.price * (srate/100), 0.05) + this.roundUp(item.qty * item.price * (irate/100), 0.05);
      item.total = item.price + item.tax;

      // Accumulate in basket
      calculated.tax += item.tax;
      calculated.total += item.total;
    });

    return calculated;
  }
}
