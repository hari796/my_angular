import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    
  ) { }

  public login(): void {

  }

  public logout(): void {

  }

  public isLoggedIn(): boolean {
    return true
  }
}
