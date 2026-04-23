import { Component, effect, signal } from '@angular/core';
import { BEST_SELLERS } from '../../core/constants/products';
import { ProductCardComponent } from '../home/best-selling-component/product-card-component/product-card-component';
import { FilterComponent } from "./filter-component/filter-component";
import { HeaderComponent } from "./header-component/header-component";

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, FilterComponent, HeaderComponent],
  templateUrl: './catalog.html',
})
export class Catalog {
  products = signal(BEST_SELLERS);
  isMobileFilterOpen = signal(false);

  constructor() {
    // Bloquear el scroll global si el menú móvil de filtros se abre
    effect(() => {
      if (this.isMobileFilterOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  toggleFilters() {
    this.isMobileFilterOpen.update((v) => !v);
  }
}
