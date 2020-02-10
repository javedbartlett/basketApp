import { Injectable } from '@angular/core';
import baskets from './data/basket.json';
import taxRules from './data/tax-rules.json';
import { map, find } from 'lodash';

export interface Basket {
  name: string,
  items: Item[];
}

export interface Item {
  qty: number;
  title: string;
  price: number;
  category: string; // lookup in tax table
  imported?: boolean;
  image: string;
}

export interface TaxRule {
  name: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBasketNames(): string[] {
    return map(baskets, (basket: Basket) => basket.name);
  }

  getBasketByName(name: string): Basket {
    return find(baskets, (basket: Basket) => basket.name === name);
  }

  getTaxRules() {
    return taxRules;
  }
}
