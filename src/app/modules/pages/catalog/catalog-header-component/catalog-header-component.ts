import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-catalog-header-component',
  imports: [],
  templateUrl: './catalog-header-component.html',
  styles: ``,
})
export class CatalogHeaderComponent {
  totalProducts = input.required<number>();
  openMobileFilters = output<void>();
}
