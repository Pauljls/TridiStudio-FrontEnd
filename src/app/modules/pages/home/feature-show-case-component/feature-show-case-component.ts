import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-show-case-component',
  imports: [],
  templateUrl: './feature-show-case-component.html',
  styles: ``,
})
export class FeatureShowCaseComponent {
  readonly #Router = inject(Router);

  toCatalog() {
    this.#Router  .navigate(['/catalog']);
  }
}
