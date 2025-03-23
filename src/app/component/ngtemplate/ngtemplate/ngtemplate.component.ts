import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  isUSerLoggedIn: boolean = true;
  loggedInUserName: string = 'Ranjeet Kumar Singh';

  LoginUser() {
    this.isUSerLoggedIn = true;
  }
  logoutUser() {
    this.isUSerLoggedIn = false;
  }
}
