import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  login(credentials: { username: string, password: string }) {
    return this.http.post('/api/login', credentials);
  }
}
