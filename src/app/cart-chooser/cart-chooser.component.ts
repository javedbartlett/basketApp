import { Component, OnInit } from '@angular/core';
import {Basket, DataService} from '../data.service';

@Component({
  selector: 'app-cart-chooser',
  templateUrl: './cart-chooser.component.html',
  styleUrls: ['./cart-chooser.component.scss']
})
export class CartChooserComponent implements OnInit {

  basketNames: string[];
  basket: Basket;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.basketNames = this.dataService.getBasketNames();
  }

  changeBasket(event) {
    console.log('On change basket event', event.target.value);
    this.basket = this.dataService.getBasketByName(event.target.value);
    console.log('Got basket', this.basket);
  }

}
