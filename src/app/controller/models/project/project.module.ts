import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectModule {
  id ?: number;
  name ?: string;
  status ?: boolean;
  dateDebut ?: string;
  dateFin ?: string;
  Description ?:string;
}
