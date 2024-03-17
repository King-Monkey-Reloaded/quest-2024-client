import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'JoinedCarouselComponent',
  standalone: true,
  imports: [TicketComponent],
  templateUrl: './joined-carousel.component.html',
  styleUrl: './joined-carousel.component.css'
})
export class JoinedCarouselComponent {

}
