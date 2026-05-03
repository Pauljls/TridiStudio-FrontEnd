import { Component } from '@angular/core';
import { COLLECTIONS } from '@core/constants/collections';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-collection-component',
  imports: [ScrollRevealDirective],
  templateUrl: './collection-component.html',
  styles: ``,
})
export class CollectionComponent {
  public collections = COLLECTIONS;
}
