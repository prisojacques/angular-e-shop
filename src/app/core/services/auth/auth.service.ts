import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Logincredentials} from "../../models/Logincredentials";
import {map, Observable} from "rxjs";
import {LoginResponses} from "../../models/loginResponses";
import {basicUrl} from "../../constants/apiUrl";
import {Registrationcredentials} from "../../models/Registrationcredentials";
import {RegistrationResponses} from "../../models/registrationResponses";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  loginUser(credentials: Logincredentials): Observable<LoginResponses> {
    return this.http.post<LoginResponses>(`${basicUrl}/login`, credentials)
  }

  registerUser(credentials: Registrationcredentials): Observable<boolean> {
    return this.http.post<RegistrationResponses>(`${basicUrl}/register`, credentials)
        .pipe(map((res) => {
          return res.success
        }))
  }

}
