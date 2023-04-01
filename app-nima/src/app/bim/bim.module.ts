import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BimRoutingModule } from './bim-routing.module';
import { BimComponentComponent } from './bim-component.component';
import { BankComponent } from './bank/bank.component';


@NgModule({
  declarations: [
    BimComponentComponent,
    BankComponent
  ],
  imports: [
    CommonModule,
    BimRoutingModule
  ]
})
export class BimModule { }
