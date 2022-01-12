// Module Imports
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';

// Components Imports
import {TachesComponentComponent} from './taches-component/taches-component.component';
import {TicketComponentComponent} from './ticket-component/ticket-component.component';
import {MenubarComponentComponent} from './menubar-component/menubar-component.component';
import {AppComponent} from './app.component';
import {SingleProjectComponent} from './single-project/single-project.component';
import {CardModule} from 'primeng/card';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TachesComponentComponent,
    TicketComponentComponent,
    MenubarComponentComponent,
    SingleProjectComponent,
    SingleTicketComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    DropdownModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    MegaMenuModule,
    NgbModule,
    MenubarModule,
    DragDropModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    InputTextareaModule,
    ConfirmDialogModule,

  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
