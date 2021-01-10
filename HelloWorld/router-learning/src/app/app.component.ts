import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - Router Learning';

  constructor(
    private authService: AuthService,
    private userService: UserService
    ) {}

  login() {
    this.authService.login();
    this.userService.user.name = 'Tinh Tu Te';
    alert('Login Successful!');
  }

  logout() {
    this.authService.logout();
    alert('Logout Successful!');
  }
}
