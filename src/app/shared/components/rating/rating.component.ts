import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() getobj!: Iproduct;
  constructor() {}

  ngOnInit(): void {}
}
