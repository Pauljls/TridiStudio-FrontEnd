import { Component } from '@angular/core';
import { FeatureShowCaseComponent } from './feature-show-case-component/feature-show-case-component';
import { BestSellingComponent } from './best-selling-component/best-selling-component';
import { CollectionComponent } from './collection-component/collection-component';
import { HowItWorks } from './how-it-works/how-it-works';
import { TestimonialsComponent } from "./testimonials-component/testimonials-component";
import { CallToAactionComponent } from "./call-to-aaction-component/call-to-aaction-component";

@Component({
  selector: 'app-home',
  imports: [FeatureShowCaseComponent, BestSellingComponent, CollectionComponent, HowItWorks, TestimonialsComponent, CallToAactionComponent],
  templateUrl: './home.html',
})
export class Home {}
