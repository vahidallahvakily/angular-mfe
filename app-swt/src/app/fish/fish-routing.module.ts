import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FishComponent} from "./fish.component";

const routes: Routes = [
  {
    path: '',
    component: FishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
