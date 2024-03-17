import { Component } from '@angular/core';
import { CarouselComponent } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
