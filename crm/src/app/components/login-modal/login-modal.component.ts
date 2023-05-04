import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private _window: MatDialogRef<LoginModalComponent>,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this._authService.login(username, password).subscribe({
        next: (value) => {
          console.log(value); 
          if (value.length > 0) {
            const token = this._authService.generateToken();
          console.log(token);
          this._authService.setToken(token);
          console.log('successful login');
          this.isLoggedIn = true;
          this._window.close(true);
          } else {
            console.log('User not found');
          }

        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  closeDialog(): void {
    this._window.close(false);
  }
}
