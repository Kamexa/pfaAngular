import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {ProjectModule} from '../controller/models/project/project.module';
import {ProjectService} from '../controller/services/project.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  displayModal: boolean = false;
  projects: ProjectModule[] = [];
  hovered: boolean = false;
  dateFormat : string = 'yy-mm-dd';
  showModalDialog() {
    this.displayModal = true;
  }

  constructor(
    private projectService: ProjectService
  ) {
  }
@Input() project: ProjectModule = new ProjectModule();
  ngOnInit(): void {
    this.projectService.findAll().subscribe((data: ProjectModule[]) => {
      data.forEach((d )=> {
        d.dateDebut = d.dateDebut!.split('T')[0];
        d.dateFin = d.dateFin!.split('T')[0];
        this.projects.push(d);
      })
    });
  }
  newProjectClick(){
    this.projectService.createProject(this.project).subscribe((data : {}) =>{
      console.log(data);
    });
    this.projects.push(this.project);
    this.project = new ProjectModule();
  }

}
