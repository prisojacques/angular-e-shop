import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, InputTextModule, ButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router) {
  }
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.loginData);
    // Fügen Sie hier Ihre Login-Logik hinzu, z.B. Authentifizierungsservice aufrufen
  }

  onAn() {
    this.router.navigateByUrl("registration")
  }
}


