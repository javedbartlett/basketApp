import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartChooserComponent } from './cart-chooser.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CartChooserComponent', () => {
  let component: CartChooserComponent;
  let fixture: ComponentFixture<CartChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ CartChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
