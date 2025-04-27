import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../serrvice/product.service';
import { Iproduct } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  productArr: Iproduct[] = [];
  subs!: Subscription;
  changeImg: any = null;

  isInwhishlist: { [prodId: string]: boolean } = {};

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProd();
  }

  getProd() {
    this.subs = this._productService.fetchAllPRoduct().subscribe((s) => {
      if (s) {
        this.productArr = s;
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
