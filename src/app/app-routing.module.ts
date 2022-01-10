import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {TachesComponentComponent} from "./taches-component/taches-component.component";
import {TicketComponentComponent} from "./ticket-component/ticket-component.component";

const routes: Routes = [
  {path: 'projects', component: MainMenuComponent},
  {path: 'taches', component: TachesComponentComponent},
  {path: 'tickets', component: TicketComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
