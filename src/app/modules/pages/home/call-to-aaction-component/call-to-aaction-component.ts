import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-call-to-aaction-component',
  imports: [ScrollRevealDirective],
  templateUrl: './call-to-aaction-component.html',
  styles: ``,
})
export class CallToAactionComponent {
  private router = inject(Router);

  linkToCatalog() {
    this.router.navigate(['/catalog']);
  }
}
