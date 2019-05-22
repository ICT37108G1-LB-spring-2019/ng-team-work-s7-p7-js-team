import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoteBListComponent } from "./note-blist/note-blist.component";
import { NoteBItemComponent } from "./note-bitem/note-bitem.component";
import { RequestService } from "./request.service";
import { HttpClientModule } from "@angular/common/http";
import { CakesDetailedComponent } from "./cakes-detailed/cake-detailed.component";
import { CakedetailedinfoComponent } from "./cakedetailedinfo/cakedetailedinfo.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { FormsModule } from "@angular/forms";
import { AdminDetailedComponent } from "./admin-detailed/admin-detailed.component";
import { AddFormComponent } from "./add-form/add-form.component";
import { PageNoteFound404Component } from "./page-note-found404/page-note-found404.component";
@NgModule({
  declarations: [
    AppComponent,
    NoteBListComponent,
    NoteBItemComponent,
    CakesDetailedComponent,
    CakedetailedinfoComponent,
    AdminPanelComponent,
    AdminDetailedComponent,
    AddFormComponent,
    PageNoteFound404Component
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
