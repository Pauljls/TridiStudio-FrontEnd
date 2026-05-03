import { Component, signal, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoutBtnComponent } from '../logout-btn/logout-btn';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, RouterLinkActive, LogoutBtnComponent],
  templateUrl: './admin-sidebar.html',
})
export class AdminSidebarComponent {
  isSidebarOpen = signal(false);
  sidebarToggled = output<void>();

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
    this.sidebarToggled.emit();
  }
}
