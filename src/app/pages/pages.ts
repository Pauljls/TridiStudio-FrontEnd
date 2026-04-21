import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importa tus componentes shared
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-pages',
  standalone: true, // Asegúrate de que tenga esto si es Angular 17+
  imports: [
    RouterOutlet,
    Header, // <--- Agrégalo aquí
    Footer, // <--- Agrégalo aquí
  ],
  templateUrl: './pages.html',
})
export class Pages {}
