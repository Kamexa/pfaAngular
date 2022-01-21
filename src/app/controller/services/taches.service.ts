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
    tache.id = Math.floor(Math.random() * 690)+100;
    return this.httpClient.post<TachesModule>('http://localhost:3000/tasks',tache,this.httpOptions);
  }
  deleteById(id : number){
    return this.httpClient.delete('http://localhost:3000/tasks/'+id,this.httpOptions);
  }
  findByName(name : string){
    return this.httpClient.get<TachesModule[]>('http://localhost:3000/tasks?name='+name,this.httpOptions);
  }
  updateAll(id : number,tache : any){
    return this.httpClient.put<TachesModule>(`http://localhost:3000/tasks/${id}`,tache,this.httpOptions);
  }
}
