import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basicUrl = 'https://shopapi.gustaveckt.com/api';
  constructor(private http: HttpClient) { }


  loginUser(credentials: { username: string, password: string }) {
    return this.http.post(`${this.basicUrl}/login`, credentials);
  }
}
