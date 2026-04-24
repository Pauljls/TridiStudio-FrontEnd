import { Component, input, signal } from '@angular/core';
import { Product } from '@shared/interfaces/Product';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
