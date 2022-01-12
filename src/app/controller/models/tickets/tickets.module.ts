import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TicketsModule {
  id ?: number;
  name ?: string;
  status ?: boolean;
  projectId ?: number;
  dateDebut ?: Date;
  dateFin ?: Date;
}
