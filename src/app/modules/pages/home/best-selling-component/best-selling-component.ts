import { Component } from '@angular/core';
import { BEST_SELLERS } from '@core/constants/products';
import { ProductCardComponent } from './product-card-component/product-card-component';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-best-selling-component',
  imports: [ProductCardComponent, ScrollRevealDirective],
  templateUrl: './best-selling-component.html',
  styles: ``,
})
export class BestSellingComponent {
  public bestSellers = BEST_SELLERS;
}
