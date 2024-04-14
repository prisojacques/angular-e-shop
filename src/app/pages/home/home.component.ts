import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {LoginComponent} from "../login/login.component";
import {ButtonModule} from "primeng/button";
import {Product} from "../../core/models/product.model";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {PRODUCTS} from "../../core/constants/constants";
import {NewArrivalComponent} from "../../shared/components/new-arrival/new-arrival.component";
import {BestRateComponent} from "../../shared/components/best-rate/best-rate.component";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    RouterLink,
    CurrencyPipe,
    NgForOf,
    ProductCardComponent,
    NewArrivalComponent,
    BestRateComponent,
    LoginComponent,
    RegisterComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'all category',
        items: [

        ]
      },
      { label: 'article', routerLink: ['/article'] },
      { label: 'article-details', routerLink: ['/article-details'] },
    ];
  }

}
