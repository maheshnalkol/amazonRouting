import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-buycart',
  templateUrl: './buycart.component.html',
  styleUrls: ['./buycart.component.scss'],
})
export class BuycartComponent implements OnInit {
  @Input() getObj!: Iproduct;
  count: number = 1;
  constructor() {}

  ngOnInit(): void {}
  onminus() {
    if (this.count > 1) {
      this.count--;
    }
  }
  onadd() {
    if (this.count >= 0) {
      this.count++;
    }
  }
}
