import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TicketsService} from "../controller/services/tickets.service";
import {TachesModule} from "../controller/models/taches/taches.module";
import {TachesService} from "../controller/services/taches.service";
import {TicketsModule} from "../controller/models/tickets/tickets.module";

@Component({
  selector: 'app-taches-component',
  templateUrl: './taches-component.component.html',
  styleUrls: ['./taches-component.component.css']
})
export class TachesComponentComponent implements OnInit{

  tickets : TicketsModule[] = []
  selectedTicket : TicketsModule = new TicketsModule()
  todo : string[] = [];
  doing : string[] = [];
  done : string[] = [];

  constructor(private tachesService: TachesService,private ticketsService : TicketsService) {
  }

  ngOnInit(): void {
    this.ticketsService.findAll().subscribe((data) => {
      console.log('this is all the data ', data)
      this.tickets = data;
      console.log('this is all the tickets ', data)
      this.selectedTicket = data[0];
      console.log('this is the selected Ticket ', this.selectedTicket)
      this.tachesService.findByTicketId(this.selectedTicket.id!).subscribe((data) => {
        data.forEach((d) => {
          if (d.status == "todo") this.todo.push(d.name!)
          if (d.status == "doing") this.doing.push(d.name!)
          if (d.status == "done") this.done.push(d.name!)
        })
      })
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onChange() {
    this.tachesService.findByTicketId(this.selectedTicket.id!).subscribe((data) => {
      this.todo = []
      this.doing = []
      this.done = []
      data.forEach((d) => {
        if (d.status == "todo") this.todo.push(d.name!)
        if (d.status == "doing") this.doing.push(d.name!)
        if (d.status == "done") this.done.push(d.name!)
      })
    })
  }
}
