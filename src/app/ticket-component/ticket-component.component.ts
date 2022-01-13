import {Component, Input, OnInit} from '@angular/core';
import {TicketsModule} from "../controller/models/tickets/tickets.module";
import {TicketsService} from "../controller/services/tickets.service";



@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-component.component.html',
  styleUrls: ['./ticket-component.component.css']
})
export class TicketComponentComponent implements OnInit {
  displayModal: boolean = false;
  tickets : TicketsModule[] = [];
  constructor(private ticketService : TicketsService) {
  }
  showModalDialog() {
    this.displayModal = true;
  }
  @Input() ticket: TicketsModule = new TicketsModule();
  ngOnInit(): void {
    this.ticketService.findAll().subscribe((data: TicketsModule[]) => this.tickets= data);
  }
  newTicketClick(){
    this.ticketService.createTicket(this.ticket).subscribe((data :{})=>{
      console.log(data);
    })
  }
}
