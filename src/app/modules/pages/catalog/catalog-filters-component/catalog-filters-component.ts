import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-catalog-filters-component',
  imports: [],
  templateUrl: './catalog-filters-component.html',
  styles: ``,
})
export class CatalogFiltersComponent {
  isOpen = input.required<boolean>();
  close = output<void>();
}
