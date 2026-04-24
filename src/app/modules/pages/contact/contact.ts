import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  isSubmitting = signal(false);
  isSuccess = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);

      setTimeout(() => this.isSuccess.set(false), 5000);
    }, 1500);
  }
}
