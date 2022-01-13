import {Component, Input, OnInit} from '@angular/core';
import {TicketsModule} from "../controller/models/tickets/tickets.module";
import {TicketsService} from "../controller/services/tickets.service";

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {
  @Input() ticket: TicketsModule = new TicketsModule();
  showModal = false;
  constructor(private ticketService : TicketsService) { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.showModal = true;
  }
  deleteTicketClick(ticket : TicketsModule){
    this.ticketService.deleteTicket(ticket.id!).subscribe((data : {})=>{
      console.log(data);
    });
  }
}
