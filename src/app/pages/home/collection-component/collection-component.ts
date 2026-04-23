import { Component } from '@angular/core';
import { COLLECTIONS } from '../../../core/constants/collections';
@Component({
  selector: 'app-collection-component',
  imports: [],
  templateUrl: './collection-component.html',
  styles: ``,
})
export class CollectionComponent {
  public collections = COLLECTIONS;
}
  