import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoatComponent } from './list-goat/list-goat.component';
import { DetailGoatComponent } from './detail-goat/detail-goat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'goats', component: ListGoatComponent},
  {path: 'goat/:id', component: DetailGoatComponent},

];

@NgModule({
  declarations: [
    ListGoatComponent,
    DetailGoatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GoatModule { }
