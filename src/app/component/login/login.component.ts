import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    userName: '',
    password: ''
  }
  router = inject(Router);

  onLogin() {
    if (this.userObj.userName == "admin" && this.userObj.password == "12345") {
      alert("login success");
      this.router.navigateByUrl('product-list');
      localStorage.setItem('loginUser', this.userObj.userName);
    }
    else {
      alert("Wrong Credential");
    }
  }
}
