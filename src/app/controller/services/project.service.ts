import { Injectable } from '@angular/core';
import { ProjectModule } from '../models/project/project.module';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  allProjects : ProjectModule[] = [];
  constructor(private httpClient : HttpClient) { }

  public  findAll() {
     return this.httpClient.get<ProjectModule[]>('http://localhost:3000/projects');
  }

}
