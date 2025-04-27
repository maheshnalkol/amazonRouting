import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../serrvice/product.service';
import { Iproduct } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  prodObj!: Iproduct;
  prodId!: string;
  subs!: Subscription;
  selectedImg!: string;
  constructor(
    private _productService: ProductService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getObj();
  }
  getObj() {
    this.prodId = this._routes.snapshot.params['prodId'];
    this.subs = this._productService.getObj(this.prodId).subscribe((s) => {
      this.prodObj = s;
      this.selectedImg = this.prodObj.images[0];
      console.log(this.prodObj);
    });
  }

  onchangeImg(img: string) {
    this.selectedImg = img;
  }
}
