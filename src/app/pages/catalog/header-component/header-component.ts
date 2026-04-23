import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styles: ``,
})
export class HeaderComponent {
  totalProducts = input.required<number>();
  openMobileFilters = output<void>();
}
