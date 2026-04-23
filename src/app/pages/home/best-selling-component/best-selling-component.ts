import { Component } from '@angular/core';
import { BEST_SELLERS } from '../../../core/constants/products';
import { ProductCardComponent } from './product-card-component/product-card-component';

@Component({
  selector: 'app-best-selling-component',
  imports: [ProductCardComponent],
  templateUrl: './best-selling-component.html',
  styles: ``,
})
export class BestSellingComponent {
  public bestSellers = BEST_SELLERS;
}
