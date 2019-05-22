import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { NoteBListComponent } from "./note-blist/note-blist.component";
import { CakesDetailedComponent } from "./cakes-detailed/cake-detailed.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddFormComponent } from "./add-form/add-form.component";

const routes: Routes = [
  {
    path: "cakes",
    component: NoteBListComponent
  },
  {
    path: "cakes/:id",
    component: CakesDetailedComponent
  },
  { path: "", redirectTo: "/cakes", pathMatch: "full" },
  {
    path: "admin",
    component: AdminPanelComponent,
    children: [{ path: "new", component: AddFormComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
