import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackBarService } from '../snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthServiceService,
    private _snackBarService: SnackBarService
  ) {}

  invalidEmail: String = '';
  notPasswordMatch: String = '';

  registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  register() {
    if (
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(
        this.registrationForm.value.email
      ) === false
    ) {
      this.invalidEmail = 'Invalid email';
    } else if (
      this.registrationForm.value.password !==
      this.registrationForm.value.confirmPassword
    ) {
      this.notPasswordMatch = "Passwords don't match";
    }

    this._authService.register(this.registrationForm.value).subscribe({
      next: () => {
        this._snackBarService.openSnackBar('Registered successfully!', 'Done');
        this._router.navigate(['/', 'login'])
      },
      error: () => {
        this._snackBarService.openSnackBar('User Already Exists', 'Failed');
      },
    });
  }
}