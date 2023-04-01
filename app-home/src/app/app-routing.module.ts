import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
declare module 'swt/fish';

const routes: Routes = [
  {
    path: 'fish',
    loadChildren: () => import('swt/fish').then(m => m.FishModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
