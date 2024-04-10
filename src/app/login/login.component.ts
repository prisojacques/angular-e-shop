import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {AuthServiceService} from "../service/auth-service.service";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, InputTextModule, ButtonModule, ReactiveFormsModule, DialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  showDialog: boolean = false;
  loginForm!: FormGroup;
  showLoginDialog = false;

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.createForm();
  }


  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  onUserIconClick() {
    this.showLoginDialog = true;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
          response => {
            // Hier würden Sie das Token speichern und den Benutzer weiterleiten
            this.showDialog = false;
          },
          error => {
            // Behandeln Sie Fehler, wie z.B. falsche Anmeldeinformationen
            console.error(error);
          }
      );
    }
  }


  openDialog() {

  }
}
