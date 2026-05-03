import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = 'translateY(30px)';
    this.el.nativeElement.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
    this.el.nativeElement.style.transitionDelay = `${this.revealDelay}ms`;

    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.style.opacity = '1';
          this.el.nativeElement.style.transform = 'translateY(0)';
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
