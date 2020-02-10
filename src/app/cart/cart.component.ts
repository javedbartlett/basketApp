import { Router } from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {Basket, Item, DataService} from '../data.service';
import { get } from 'lodash';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() basket: Basket;

  private taxRules; //: TaxRule[];

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.taxRules = this.dataService.getTaxRules();
  }

  gotoCheckout() {
      this.router.navigateByUrl('/checkout', { state: this.basket });
    }

  getFlags(item: Item) {
    const tax =  get(this.taxRules, item.category, 0);
    const flag = `${item.category} sales tax applies at ${tax}%`;
    return flag + (item.imported ? `, import duty applicable at ${get(this.taxRules, 'import')}%` : '');
  }
}
