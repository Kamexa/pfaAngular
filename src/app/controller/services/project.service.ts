import {Injectable} from '@angular/core';
import {ProjectModule} from '../models/project/project.module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  allProjects: ProjectModule[] = [];

  constructor(private httpClient: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public findAll() {
    return this.httpClient.get<ProjectModule[]>('http://localhost:3000/projects');
  }
   createProject(project: ProjectModule) {
    project.id = Math.floor(Math.random() * 690) + 100;
     return this.httpClient.post<ProjectModule>('http://localhost:3000/projects',project,this.httpOptions);
  }

  public deleteProject(id : Number){
     return this.httpClient.delete('http://localhost:3000/projects/'+id,this.httpOptions);
  }

}
