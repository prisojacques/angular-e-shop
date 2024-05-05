import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../core/services/auth/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    ButtonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{

  registerForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: (data) => {
        if (data) {
          this.router.navigateByUrl("/login")
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error)
      }
    });
  }

}
