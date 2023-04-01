import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BimComponentComponent} from "./bim-component.component";
import {BankComponent} from "./bank/bank.component";

const routes: Routes = [
  {
    path: '',
    component: BimComponentComponent
  },
  {
    path: 'bank',
    component: BankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimRoutingModule { }
