import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Logincredentials} from "../core/models/Logincredentials";
import {map, Observable} from "rxjs";
import {Registrationcredentials} from "../core/models/Registrationcredentials";
import {RegistrationResponses} from "../core/models/registrationResponses";
import {LoginResponses} from "../core/models/loginResponses";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basicUrl = 'https://shopapi.gustaveckt.com/api';
  constructor(private http: HttpClient) { }


  loginUser(credentials: Logincredentials): Observable<LoginResponses> {
    return this.http.post<LoginResponses>(`${this.basicUrl}/login`, credentials)
  }

  registerUser(credentials: Registrationcredentials): Observable<boolean> {
    return this.http.post<RegistrationResponses>(`${this.basicUrl}/register`, credentials)
        .pipe(map((res) => {
          return res.success
        }))
  }
}
