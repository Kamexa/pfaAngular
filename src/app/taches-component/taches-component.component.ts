import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-taches-component',
  templateUrl: './taches-component.component.html',
  styleUrls: ['./taches-component.component.css']
})
export class TachesComponentComponent  {

  todo = ['Task1', 'Task2', 'Task3', 'Task4'];
  doing = ['Task5'];
  done = ['Task6'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
