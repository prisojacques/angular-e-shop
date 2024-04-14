import {Component, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {LoginComponent} from "../../../pages/login/login.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

}
