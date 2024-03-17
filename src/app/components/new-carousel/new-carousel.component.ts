import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'NewCarouselComponent',
  standalone: true,
  imports: [TicketComponent],
  templateUrl: './new-carousel.component.html',
  styleUrl: './new-carousel.component.css',
})
export class NewCarouselComponent {}
