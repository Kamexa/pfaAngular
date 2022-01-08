import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menubar-component',
  templateUrl: './menubar-component.component.html',
  styleUrls: ['./menubar-component.component.css']
})
export class MenubarComponentComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        url : '/'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-book',
        url : '/projects'
      },
      {
        label : 'Taches',
        icon: 'pi pi-fw pi-bookmark',
        url: '/taches'
      }
    ];
  }

}
