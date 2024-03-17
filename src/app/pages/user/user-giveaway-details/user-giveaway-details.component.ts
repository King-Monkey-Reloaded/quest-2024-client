import { Component } from '@angular/core';
import { BannerComponent } from '../../../components/banner/banner.component';
import { NewCarouselComponent } from '../../../components/new-carousel/new-carousel.component';

@Component({
  selector: 'UserGiveawayDetailsComponent',
  standalone: true,
  imports: [BannerComponent, NewCarouselComponent],
  templateUrl: './user-giveaway-details.component.html',
  styleUrl: './user-giveaway-details.component.css'
})
export class UserGiveawayDetailsComponent {

}
