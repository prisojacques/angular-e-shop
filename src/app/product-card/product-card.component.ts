import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {Product} from "../models/product.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
