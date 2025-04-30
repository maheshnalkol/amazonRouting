import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { style } from '@angular/animations';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() getobj!: Iproduct;
  rating!: number;
  constructor() {}

  ngOnInit(): void {
    this.rating = this.getobj.rating;
    console.log(this.rating);
    
  }
}
