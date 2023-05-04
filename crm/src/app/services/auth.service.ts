import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiURL = 'http://localhost:4200'; 
  private readonly tokenName = 'auth_token';

  constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    return this._httpClient.get<any>(`http://localhost:3000/users?username=${username}&password=${password}`)
  }

  setToken(token: string): void {
    this._cookieService.set('auth_token', token);
  }

  getToken(): string {
    return this._cookieService.get('auth_token');
  }
  
  generateToken() {
    const token = Math.random().toString(36).substr(2);
    return token;
  }

  logout(): void {
    this._cookieService.delete('auth_token');
  }
}
