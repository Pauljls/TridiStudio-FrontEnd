import { OrderItem } from './OrderItem';

export interface AdminOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  status: string;
  date: string;
  items: OrderItem[];
}
