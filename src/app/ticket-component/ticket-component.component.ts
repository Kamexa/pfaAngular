import {Component, Input, OnInit} from '@angular/core';
import {TicketsModule} from "../controller/models/tickets/tickets.module";
import {TicketsService} from "../controller/services/tickets.service";
import {ProjectModule} from "../controller/models/project/project.module";
import {ProjectService} from "../controller/services/project.service";



@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-component.component.html',
  styleUrls: ['./ticket-component.component.css']
})
export class TicketComponentComponent implements OnInit {
  displayModal: boolean = false;
  tickets : TicketsModule[] = [];
  projects : ProjectModule[] = [];
  constructor(private ticketService : TicketsService,private projectService : ProjectService) {
  }
  showModalDialog() {
    this.displayModal = true;
  }
  @Input() ticket: TicketsModule = new TicketsModule();
  selectedProject : ProjectModule = new ProjectModule();
  ngOnInit(): void {
    this.projectService.findAll().subscribe((data : ProjectModule[]) => this.projects = data);
    this.ticketService.findAll().subscribe((data: TicketsModule[]) => {
      data.forEach((d) => {
        d.dateDebut = d.dateDebut!.split('T')[0];
        d.dateFin = d.dateFin!.split('T')[0];
        this.tickets.push(d);
      })
    });
  }
  newTicketClick(){
    this.ticket.projectId = this.selectedProject.id
    console.log(this.selectedProject.id)
    this.ticketService.createTicket(this.ticket).subscribe((data :{})=>{
      console.log(data);
    })
    this.tickets.push(this.ticket);
    this.ticket = new TicketsModule();
  }

}
