import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TachesModule} from "../models/taches/taches.module";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TachesService {
  allTasks : TachesModule[] = []
  constructor(private httpClient : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   findAll() {
    return this.httpClient.get<TachesModule[]>('http://localhost:3000/tasks')
  }

  findByTicketId(ticketId : number) {
    return this.httpClient.get<TachesModule[]>('http://localhost:3000/tasks?ticketId='+ticketId)
  }
  createTasks(tache: TachesModule) {
    tache.id = Math.random();
    return this.httpClient.post<TachesModule>('http://localhost:3000/tasks',tache,this.httpOptions);
  }
}
