import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationInterface } from '../interfaces/registration-interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthServiceService){}

  invalidEmail: String = ''
  notPasswordMatch: String = ''

  registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  register() {
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(this.registrationForm.value.email) === false) {
      this.invalidEmail = 'Invalid email';
    } else if (
      this.registrationForm.value.password !==
      this.registrationForm.value.confirmPassword
    ) {
      this.notPasswordMatch = "Passwords don't match";
    
    } 

    this._authService.register(this.registrationForm.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: console.log
    })
  }
}
