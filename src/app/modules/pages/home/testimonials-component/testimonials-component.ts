import { Component } from '@angular/core';
import { TESTIMONIALS } from '@core/constants/testimonials';

@Component({
  selector: 'app-testimonials-component',
  imports: [],
  templateUrl: './testimonials-component.html',
  styles: ``,
})
export class TestimonialsComponent {
  public testimonials = TESTIMONIALS;
}
