import { Component } from '@angular/core';
import {Product} from "../models/product.model";
import {BEST_RATE_PRODUCTS, PRODUCTS} from "../shared/constants";
import {RouterLink} from "@angular/router";
import {ProductCardInlineComponent} from "../product-card-inline/product-card-inline.component";

@Component({
  selector: 'app-best-rate',
  standalone: true,
  imports: [
    RouterLink,
    ProductCardInlineComponent
  ],
  templateUrl: './best-rate.component.html',
  styleUrl: './best-rate.component.scss'
})
export class BestRateComponent {
  products: Product[] = BEST_RATE_PRODUCTS
}
