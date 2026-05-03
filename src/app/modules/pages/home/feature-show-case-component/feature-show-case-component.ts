import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-feature-show-case-component',
  imports: [ScrollRevealDirective],
  templateUrl: './feature-show-case-component.html',
  styles: ``,
})
export class FeatureShowCaseComponent {
  readonly #Router = inject(Router);

  toCatalog() {
    this.#Router  .navigate(['/catalog']);
  }
}
