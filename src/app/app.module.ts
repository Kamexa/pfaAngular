// Module Imports
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from './app-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ProjectService} from "./controller/services/project.service";
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from "primeng/megamenu";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';

// Components Imports
import {TachesComponentComponent} from './taches-component/taches-component.component';
import {TicketComponentComponent} from './ticket-component/ticket-component.component';
import {MenubarComponentComponent} from './menubar-component/menubar-component.component';
import {AppComponent} from './app.component';
import {SingleProjectComponent} from './single-project/single-project.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TachesComponentComponent,
    TicketComponentComponent,
    MenubarComponentComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    MegaMenuModule,
    NgbModule,
    MenubarModule,
    DragDropModule,
    DialogModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
