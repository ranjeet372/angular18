import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { validateHeaderName } from 'http';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm: any;
  alertType: any = "Warning";
  responseMessage: any = 'Hello this is reactive form!';
  constructor(private formbuilder: FormBuilder) {

    this.userForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      city: '',
      state: '',
      zipCode: '',
      isAcceptTerms: false
    })
  }

  formValue: any;

  addUser(data: any) {
    if (this.userForm.invalid) {
      alert('Please input required fields');
      return;
    }
    debugger;
    this.formValue = this.userForm.value;
    this.alertType = "Success";
    this.responseMessage = 'User has been added successfully!';
    alert(data);
  };
}
