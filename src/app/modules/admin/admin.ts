import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, AdminSidebarComponent],
  templateUrl: './admin.html',
})
export class Admin {}
