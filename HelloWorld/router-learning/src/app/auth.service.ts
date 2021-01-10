import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;

  constructor() {}
  
  login(): void {
    this.isAuthorized = true;
  }

  logout(): void {
    this.isAuthorized = false;
  }

}
