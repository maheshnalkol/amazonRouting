import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.scss'],
})
export class ShowcardComponent implements OnInit {
  @Input() getprod!: Iproduct;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onCloseclick() {
    this.close.emit(); // This will notify the parent component to close the card
  }
}
