import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenubarModule, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Shop';
}
