import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TicketsModule} from "../models/tickets/tickets.module";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  allTickets : TicketsModule[] = [];
  constructor(private httpClient : HttpClient) { }
  public findAll() {
    return this.httpClient.get<TicketsModule[]>('http://localhost:3000/tickets');
  }
  public findTicketByProjectId(projectId : number){
    return this.httpClient.get<TicketsModule[]>('http://localhost:3000/tickets?projectId='+projectId)
  }
  public deleteTicketByProjectId(projectId : number){
    console.log("this is the task id : "+projectId)
    console.log('http://localhost:3000/tickets/'+projectId)
     this.httpClient.delete('http://localhost:3000/tickets/'+projectId)
  }
}
