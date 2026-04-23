import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  imports: [],
  templateUrl: './filter-component.html',
  styles: ``,
})
export class FilterComponent {
  isOpen = input.required<boolean>();
  close = output<void>();
}
