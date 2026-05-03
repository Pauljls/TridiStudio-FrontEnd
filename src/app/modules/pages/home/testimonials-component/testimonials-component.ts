import { Component } from '@angular/core';
import { TESTIMONIALS } from '@core/constants/testimonials';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials-component',
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials-component.html',
  styles: ``,
})
export class TestimonialsComponent {
  public testimonials = TESTIMONIALS;
}
