import { Product } from '../../shared/interfaces/Product';

export const BEST_SELLERS: Product[] = [
  {
    id: 1,
    name: 'Goku Ultra Instinto',
    category: 'Anime',
    price: 150,
    oldPrice: 180,
    rating: 5,
    reviews: 24,
    image: '🔥', // Aquí irá el path de tu imagen: 'assets/images/goku.webp'
    tag: 'MÁS VENDIDO',
    size: '25cm',
  },
  {
    id: 2,
    name: 'Master Chief Halo',
    category: 'Videojuegos',
    price: 125,
    rating: 4,
    reviews: 18,
    image: '🎮',
    size: '20cm',
  },
  {
    id: 3,
    name: 'Catedral de Trujillo (Maqueta)',
    category: 'Arquitectura',
    price: 210,
    oldPrice: 250,
    rating: 5,
    reviews: 12,
    image: '🏛️',
    tag: 'PREMIUM',
    size: '30cm',
  },
  {
    id: 4,
    name: 'Art Toy Custom - "Sasha"',
    category: 'Custom',
    price: 95,
    rating: 5,
    reviews: 9,
    image: '🎨',
    tag: 'NUEVO',
    size: '15cm',
  },
];
