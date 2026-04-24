import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-aaction-component',
  imports: [],
  templateUrl: './call-to-aaction-component.html',
  styles: ``,
})
export class CallToAactionComponent {
  private router = inject(Router);

  linkToCatalog() {
    this.router.navigate(['/catalog']);
  }
}
