import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  isInwhishlist: { [prodId: string]: boolean } = {};
  changeImg: any = null;
  @Input() prod!: Iproduct;
  constructor() {}

  ngOnInit(): void {}

  onenter(prod: Iproduct) {
    this.changeImg = prod;
  }
  onleave() {
    this.changeImg = null;
  }

  onaddCart(eve: Event) {
    eve.stopPropagation();
  }
  onaddlike(eve: Event, prodId: string) {
    eve.stopPropagation();
    this.isInwhishlist[prodId] = !this.isInwhishlist[prodId];
  }
  onaddVisibility(eve: Event) {
    eve.stopPropagation();
  }
  onshuffle(eve: Event) {
    eve.stopPropagation();
  }
}
