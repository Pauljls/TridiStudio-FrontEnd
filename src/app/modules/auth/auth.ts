import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
})
export class Auth {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    this.loginError = '';

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso, respuesta:', response);
        console.log('Token en localStorage:', this.authService.getToken());
        console.log('Autenticado:', this.authService.isAuthenticated());

        this.isLoading = false;
        this.loginForm.reset();
        this.submitted = false;

        setTimeout(() => {
          console.log('Navegando a /admin...');
          this.router.navigate(['/admin']);
        }, 500);
      },
      error: (error) => {
        this.isLoading = false;
        this.loginError =
          error.error?.message || 'Error al iniciar sesión. Verifique sus credenciales.';
        console.error('Error de autenticación:', error);
      },
    });
  }
}
