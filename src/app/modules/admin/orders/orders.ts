import { Component, computed, signal } from '@angular/core';
import { AdminOrder } from '@shared/interfaces/AdminOrder';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styles: ``,
})
export class Orders {

  statusOptions = ['PENDING', 'PRINTING', 'PAINTING', 'SHIPPED', 'DELIVERED'];


  orders = signal<AdminOrder[]>([
    {
      id: '550e8400-e29b-41d4-a716',
      customerName: 'Carlos Mendoza',
      customerEmail: 'carlos@mail.com',
      totalAmount: 180,
      status: 'PRINTING',
      date: '26 Abr 2026',
      items: [{ productName: 'Goku Super Saiyan', sizeLabel: '25cm', quantity: 1 }],
    },
    {
      id: 'b12a34c5-d67e-89f0-1234',
      customerName: 'Ana Torres',
      customerEmail: 'ana.t@mail.com',
      totalAmount: 150,
      status: 'PAINTING',
      date: '25 Abr 2026',
      items: [{ productName: 'Iron Man MK50 Busto', sizeLabel: '15cm', quantity: 1 }],
    },
    {
      id: '987f65e4-d32c-10b9-8765',
      customerName: 'Luis Silva',
      customerEmail: 'luiss@mail.com',
      totalAmount: 171,
      status: 'PENDING',
      date: '24 Abr 2026',
      items: [{ productName: 'Pikachu Detallado', sizeLabel: '20cm', quantity: 2 }],
    },
  ]);


  currentFilter = signal<string>('ALL');


  filteredOrders = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'ALL') return this.orders();
    return this.orders().filter((o) => o.status === filter);
  });


  setFilter(status: string) {
    this.currentFilter.set(status);
  }

  updateOrderStatus(orderId: string, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value;

 
    this.orders.update((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order,
      ),
    );


    console.log(`Pedido ${orderId} actualizado a ${newStatus}`);
  }


  translateStatus(status: string): string {
    const dict: Record<string, string> = {
      ALL: 'Todos',
      PENDING: 'Pendientes',
      PRINTING: 'En Impresión',
      PAINTING: 'En Pintura',
      SHIPPED: 'Enviados',
      DELIVERED: 'Entregados',
    };
    return dict[status] || status;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      PENDING: 'text-neutral-400 bg-neutral-900/50',
      PRINTING: 'text-blue-400 bg-blue-900/30',
      PAINTING: 'text-purple-400 bg-purple-900/30',
      SHIPPED: 'text-green-400 bg-green-900/30',
      DELIVERED: 'text-emerald-500 bg-emerald-900/30',
    };
    return colors[status] || 'text-white bg-neutral-800';
  }
}
