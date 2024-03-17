import { Component } from '@angular/core';
import { JoinedCarouselComponent } from '../joined-carousel/joined-carousel.component';
import { NewCarouselComponent } from '../new-carousel/new-carousel.component';

@Component({
  selector: 'CarouselComponent',
  standalone: true,
  imports: [JoinedCarouselComponent, NewCarouselComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
