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
  showQuickView: boolean = false;
  @Input() prod!: Iproduct;
  selectedProd!: Iproduct;
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
    this.selectedProd = this.prod;
    this.showQuickView = !this.showQuickView;
  }
  onshuffle(eve: Event) {
    eve.stopPropagation();
  }
  onClosePopup(eve: Event) {
    eve.stopPropagation();
    this.showQuickView = false;
  }
}
