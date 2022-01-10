import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {ProjectModule} from '../controller/models/project/project.module';
import {ProjectService} from '../controller/services/project.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {

  projects: ProjectModule[] = [];
  hovered: boolean = false;

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.projectService.findAll().subscribe((data: ProjectModule[]) => this.projects = data);
  }

}
