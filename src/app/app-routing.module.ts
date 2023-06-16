import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGoatComponent } from './list-goat/list-goat.component';
import { DetailGoatComponent } from './detail-goat/detail-goat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'goats', component: ListGoatComponent},
  {path: 'goat/:id', component: DetailGoatComponent},
  {path: '', redirectTo: 'goats', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
