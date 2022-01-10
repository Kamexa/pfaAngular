import {Component, Input, OnInit} from '@angular/core';
import {ProjectModule} from "../controller/models/project/project.module";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  @Input() project: ProjectModule = new ProjectModule();

  constructor() {
  }

  ngOnInit(): void {
  }

}
