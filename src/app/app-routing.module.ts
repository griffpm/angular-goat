import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListGoatComponent } from './goat/list-goat/list-goat.component';
import { DetailGoatComponent } from './goat/detail-goat/detail-goat.component';
import { EditGoatsComponent } from './goat/edit-goats/edit-goats.component';

const routes: Routes = [
  {path: 'goats', component: ListGoatComponent},
  {path: 'edit/:id', component: EditGoatsComponent},
  {path: 'add-goat', component: AddGoatsComponent},
  {path: '', redirectTo: 'goats', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
