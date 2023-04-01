import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishComponent } from './fish.component';
import {FishRoutingModule} from "./fish-routing.module";



@NgModule({
  declarations: [
    FishComponent
  ],
  imports: [
    CommonModule,
    FishRoutingModule
  ]
})
export class FishModule { }
