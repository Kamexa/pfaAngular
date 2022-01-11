import {Component, OnInit} from '@angular/core';
import {TicketsModule} from "../controller/models/tickets/tickets.module";
import {TicketsService} from "../controller/services/tickets.service";


@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-component.component.html',
  styleUrls: ['./ticket-component.component.css']
})
export class TicketComponentComponent implements OnInit {
  tickets : TicketsModule[] = [];
  constructor(private ticketService : TicketsService) {
  }

  ngOnInit(): void {
    this.ticketService.findAll().subscribe((data: TicketsModule[]) => this.tickets= data);
  }

}
