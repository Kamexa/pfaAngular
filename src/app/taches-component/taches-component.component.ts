import {Component, Input, OnInit} from '@angular/core';
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
  displayModal: boolean = false;
  tickets : TicketsModule[] = [];
  tasks : TachesModule[] = [];
  selectedTicket : TicketsModule = new TicketsModule()
  todo : string[] = [];
  doing : string[] = [];
  done : string[] = [];
  showModalDialog() {
    this.displayModal = true;
  }
  constructor(private tachesService: TachesService,private ticketsService : TicketsService) {
  }
@Input() task: TachesModule = new TachesModule();
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
      console.log(event.previousContainer.data);
      console.log(event.container.id);
      this.tasks.forEach((task)=>{
        if(event.container.id == 'cdk-drop-list-0'){
          task.status = 'todo';
        }
        if(event.container.id == 'cdk-drop-list-1'){
          task.status = 'doing';
        }
        if(event.container.id == 'cdk-drop-list-2'){
          task.status = 'done';
        }
        this.tachesService.updateAll(task.id!,task).subscribe((data)=>{
          console.log(data);
        })
      })


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
  newTaskClick(){
    this.task.status = "todo";
    this.task.ticketId = this.selectedTicket.id;
    this.tachesService.createTasks(this.task).subscribe((data ) =>{
      console.log(data);
    });
    this.todo.push(this.task.name!);
  }

  deleteTask(test : string){
    this.tachesService.findByName(test).subscribe((data)=>{
      console.log(data);
      this.tachesService.deleteById(data[0].id!).subscribe((data )=>{
        console.log(data);
        this.tachesService.findByTicketId(this.selectedTicket.id!).subscribe((data)=>{
          this.todo = [];
          this.doing = [];
          this.done = [];
          data.forEach((d) => {
            if (d.status == "todo") this.todo.push(d.name!)
            if (d.status == "doing") this.doing.push(d.name!)
            if (d.status == "done") this.done.push(d.name!)
          })
        })
      })
    })

  }
}
