import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponent} from "./components/all/all.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {FindComponent} from "./components/find/find.component";
import {NewComponent} from "./components/new/new.component";
import {UpdateComponent} from "./components/update/update.component";

const routes: Routes = [
  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'all',component:AllComponent},
  {path:'delete',component:DeleteComponent},
  {path:'find',component:FindComponent},
  {path:'new',component:NewComponent},
  {path:'update',component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
