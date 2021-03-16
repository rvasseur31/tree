import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonComponent } from './don/don.component';

const routes: Routes = [
  { path: '', component: DonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
