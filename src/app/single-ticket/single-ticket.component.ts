import {Component, Input, OnInit} from '@angular/core';
import {TicketsModule} from "../controller/models/tickets/tickets.module";

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {
  @Input() ticket: TicketsModule = new TicketsModule();
  showModal = false;
  constructor() { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.showModal = true;
  }
}
