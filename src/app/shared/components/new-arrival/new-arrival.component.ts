import { Component } from '@angular/core';
import {Product} from "../../../core/models/product.model";
import {PRODUCTS} from "../../../core/constants/constants";
import {NgForOf} from "@angular/common";
import {ProductCardComponent} from "../product-card/product-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [
    NgForOf,
    ProductCardComponent,
    RouterLink
  ],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.scss'
})
export class NewArrivalComponent {
  products: Product[] = PRODUCTS
}
