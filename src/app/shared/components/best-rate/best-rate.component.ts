import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../../../core/models/product.model";
import {BEST_RATE_PRODUCTS, PRODUCTS} from "../../../core/constants/constants";
import {RouterLink} from "@angular/router";
import {ProductCardInlineComponent} from "../product-card-inline/product-card-inline.component";

@Component({
  selector: 'app-best-rate',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    ProductCardInlineComponent
  ],
  templateUrl: './best-rate.component.html',
  styleUrl: './best-rate.component.scss'
})
export class BestRateComponent {
  products: Product[] = BEST_RATE_PRODUCTS
}
