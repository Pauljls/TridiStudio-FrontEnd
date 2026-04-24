import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  private router = inject(Router);
  isMenuOpen = signal(false);

  constructor() {
    // Efecto para bloquear el scroll cuando el menú está abierto
    effect(() => {
      if (this.isMenuOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
  linkToCart() {
    this.router.navigate(['/cart']);
  }
}
