import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-btn',
  imports: [CommonModule],
  template: `
    <button
      (click)="logout()"
      class="flex items-center gap-3 px-4 py-3 w-full text-neutral-500 hover:text-red-400 font-medium transition-colors hover:cursor-pointer rounded-lg hover:bg-red-950/30"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        ></path>
      </svg>
      Cerrar Sesión
    </button>
  `,
})
export class LogoutBtnComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    console.log('🚪 Cerrando sesión...');
    this.authService.logout();
    console.log('✅ Sesión cerrada');
    this.router.navigate(['/auth']);
  }
}
