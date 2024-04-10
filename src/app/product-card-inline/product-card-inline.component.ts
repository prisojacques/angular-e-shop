import {Component, Input} from '@angular/core';
import {Product} from "../models/product.model";
import {CurrencyPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-product-card-inline',
  standalone: true,
  imports: [
    CurrencyPipe,
    ButtonModule
  ],
  templateUrl: './product-card-inline.component.html',
  styleUrl: './product-card-inline.component.scss'
})
export class ProductCardInlineComponent {
  @Input() product!: Product;
}
