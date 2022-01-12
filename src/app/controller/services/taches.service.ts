import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TachesModule} from "../models/taches/taches.module";
import {TicketsModule} from "../models/tickets/tickets.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  allTasks : TachesModule[] = []
  constructor(private httpClient : HttpClient) { }

   findAll() {
    return this.httpClient.get<TachesModule[]>('http://localhost:3000/tasks')
  }

  findByTicketId(ticketId : number) {
    return this.httpClient.get<TachesModule[]>('http://localhost:3000/tasks?ticketId='+ticketId)
  }

}
