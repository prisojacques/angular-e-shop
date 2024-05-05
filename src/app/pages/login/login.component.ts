import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, InputTextModule, ButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

loginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        if (data.success) {
          this.router.navigateByUrl('')
        }
      },
      error: (err: HttpErrorResponse) => {
       this.router.navigateByUrl("registration")
      }
    });
  }

  onAn() {
    this.router.navigateByUrl("registration")
  }
}


