import { Component, computed, signal } from '@angular/core';
import { CartItem } from '@shared/interfaces/CartItem';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styles: ``,
})
export class Cart {
  // Signal con datos de prueba (simulando lo que vendría de un servicio)
  cartItems = signal<CartItem[]>([
    { id: 1, name: 'Goku Super Saiyan', price: 120, image: '🐉', quantity: 1, size: '25cm' },
    { id: 3, name: 'Iron Man MK50 Busto', price: 150, image: '🎭', quantity: 2, size: '35cm' },
  ]);

  // Señales Computadas: Se recalculan solas mágicamente cuando cambia cartItems
  subtotal = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  // Costo de envío (Ejemplo: S/ 15 a todo el Perú, o gratis si no hay items)
  shipping = computed(() => (this.subtotal() > 0 ? 15 : 0));

  total = computed(() => this.subtotal() + this.shipping());

  // Métodos para interactuar con el carrito
  updateQuantity(id: number, delta: number) {
    this.cartItems.update((items) =>
      items.map((item) => {
        if (item.id === id) {
          // Aseguramos que la cantidad nunca sea menor a 1
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  }

  removeItem(id: number) {
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }
}
