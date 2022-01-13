import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TicketsModule} from "../models/tickets/tickets.module";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  allTickets : TicketsModule[] = [];
  constructor(private httpClient : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public findAll() {
    return this.httpClient.get<TicketsModule[]>('http://localhost:3000/tickets');
  }
  public findTicketByProjectId(projectId : number){
    return this.httpClient.get<TicketsModule[]>('http://localhost:3000/tickets?projectId='+projectId)
  }
  public deleteTicketByProjectId(projectId : number){
    console.log("this is the task id : "+projectId)
    console.log('http://localhost:3000/tickets/'+projectId)
     return this.httpClient.delete('http://localhost:3000/tickets/'+projectId)
  }
  createTicket(ticket: TicketsModule) {
    ticket.id = Math.random();
    return this.httpClient.post<TicketsModule>('http://localhost:3000/tickets',ticket,this.httpOptions);
  }

}
