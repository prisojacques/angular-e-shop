import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {FooterComponent} from "./shared/layouts/footer/footer.component";
import {NavbarComponent} from "./shared/layouts/navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ButtonModule, MenubarModule, FooterComponent, NavbarComponent, HttpClientModule, FormsModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Shop';
}
