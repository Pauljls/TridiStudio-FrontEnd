import { Component, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminProduct } from '@shared/interfaces/Product';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalog.html',
  styles: ``,
})
export class Catalog {
  isFormOpen = signal(false);
  categories = ['Art Toys & Anime', 'Zona Gamer', 'Cine & Bustos'];

  products = signal<AdminProduct[]>([]);

  newProduct = signal<Partial<AdminProduct>>({
    name: '',
    category: 'Art Toys & Anime',
    basePrice: 0,
    sizes: [{ label: '', priceMultiplier: 1.0 }],
    images: [],
    stockQuantity: 1,
  });

  newImageUrl = signal('');

  toggleForm() {
    this.isFormOpen.update((v) => !v);
    if (!this.isFormOpen()) this.resetForm();
  }

  addImage() {
    const url = this.newImageUrl().trim();
    if (!url) return;

    this.newProduct.update((prod) => {
      const currentImages = prod.images || [];

      const isPrimary = currentImages.length === 0;
      return {
        ...prod,
        images: [...currentImages, { url, isPrimary }],
      };
    });
    this.newImageUrl.set('');
  }

  removeImage(index: number) {
    this.newProduct.update((prod) => {
      const newImages = [...(prod.images || [])];
      newImages.splice(index, 1);

      if (newImages.length > 0 && !newImages.some((img) => img.isPrimary)) {
        newImages[0].isPrimary = true;
      }
      return { ...prod, images: newImages };
    });
  }

  setPrimaryImage(index: number) {
    this.newProduct.update((prod) => {
      const newImages = (prod.images || []).map((img, i) => ({
        ...img,
        isPrimary: i === index,
      }));
      return { ...prod, images: newImages };
    });
  }

  addSizeRow() {}
  removeSizeRow(index: number) {}

  saveProduct() {}

  resetForm() {
    this.newProduct.set({
      name: '',
      category: 'Art Toys & Anime',
      basePrice: 0,
      sizes: [{ label: '', priceMultiplier: 1.0 }],
      images: [],
    });
    this.newImageUrl.set('');
  }
}
