import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styles: ``,
})
export class Dashboard {

  stats = signal({
    monthlyRevenue: 4850.0,
    activeOrders: 14,
    printingQueue: 6,
    paintingQueue: 3,
  });


  recentOrders = signal([
    {
      id: '1a2b3c',
      customer: 'Carlos Mendoza',
      product: 'Goku Super Saiyan',
      size: '25cm',
      amount: 180,
      status: 'PRINTING',
      date: 'Hace 2 horas',
    },
    {
      id: '4d5e6f',
      customer: 'Ana Torres',
      product: 'Iron Man MK50',
      size: '15cm',
      amount: 150,
      status: 'PAINTING',
      date: 'Ayer',
    },
    {
      id: '7g8h9i',
      customer: 'Luis Silva',
      product: 'Pikachu Detallado',
      size: '20cm',
      amount: 171,
      status: 'PENDING',
      date: 'Hace 3 días',
    },
    {
      id: '9j0k1l',
      customer: 'María Paz',
      product: 'Darth Vader Diorama',
      size: '35cm',
      amount: 340,
      status: 'SHIPPED',
      date: 'Hace 4 días',
    },
  ]);


  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      PENDING: 'bg-neutral-900/50 text-neutral-400 border-neutral-700',
      PRINTING: 'bg-blue-900/30 text-blue-400 border-blue-800',
      PAINTING: 'bg-purple-900/30 text-purple-400 border-purple-800',
      SHIPPED: 'bg-green-900/30 text-green-400 border-green-800',
      DELIVERED: 'bg-emerald-900/30 text-emerald-500 border-emerald-800',
    };
    return colors[status] || 'bg-neutral-800 text-white';
  }


  translateStatus(status: string): string {
    const translations: Record<string, string> = {
      PENDING: 'Pendiente',
      PRINTING: 'En Impresión 3D',
      PAINTING: 'En Pintura',
      SHIPPED: 'Enviado',
      DELIVERED: 'Entregado',
    };
    return translations[status] || status;
  }
}
