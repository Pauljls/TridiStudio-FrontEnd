import { Component, effect, signal } from '@angular/core';
import { BEST_SELLERS } from '@core/constants/products';
import { CatalogFiltersComponent } from './catalog-filters-component/catalog-filters-component';
import { CatalogHeaderComponent } from './catalog-header-component/catalog-header-component';
import { ProductCardComponent } from '../home/best-selling-component/product-card-component/product-card-component';

@Component({
  selector: 'app-catalog',
  imports: [CatalogFiltersComponent, CatalogHeaderComponent, ProductCardComponent],
  templateUrl: './catalog.html',
  styles: ``,
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
