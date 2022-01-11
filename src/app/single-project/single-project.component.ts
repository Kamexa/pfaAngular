import {Component, Input,OnInit} from '@angular/core';
import {ProjectModule} from "../controller/models/project/project.module";
import {TicketsModule} from "../controller/models/tickets/tickets.module";
import {TicketsService} from "../controller/services/tickets.service";


@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent implements OnInit{

  displayModal: boolean = false;
  tickets : TicketsModule[] = [];
  selectedTickets : TicketsModule[] = [];
  showModalDialog() {
    this.displayModal = true;
  }
  constructor(private ticketService : TicketsService) {
  }
  @Input() project: ProjectModule = new ProjectModule();

  ngOnInit() {
    this.ticketService.findTicketByProjectId(this.project.id!).subscribe((data: TicketsModule[]) => this.tickets= data);


  }
  deleteTicket(ticket : TicketsModule){
    console.log("its clicked")
        this.ticketService.deleteTicketByProjectId(ticket.id!)
}

}
