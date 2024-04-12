import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    ButtonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{

  registerData = { name: '', email: '', password: '' };

  onSubmit() {
    console.log(this.registerData);
  }


}
