import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'CarouselComponent',
  standalone: true,
  imports: [TicketComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
