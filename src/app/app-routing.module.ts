import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGoatComponent } from './list-goat/list-goat.component';
import { DetailGoatComponent } from './detail-goat/detail-goat.component';

const routes: Routes = [
  {path: 'goats', component: ListGoatComponent},
  {path: 'goat/:id', component: DetailGoatComponent},
  {path: '', redirectTo: 'goats', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
