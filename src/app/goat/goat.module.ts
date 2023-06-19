import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoatComponent } from './list-goat/list-goat.component';
import { DetailGoatComponent } from './detail-goat/detail-goat.component';
import { RouterModule, Routes } from '@angular/router';
import { EditGoatsComponent } from './edit-goats/edit-goats.component';

const routes: Routes = [
  

];

@NgModule({
  declarations: [
    ListGoatComponent,
    DetailGoatComponent,
    EditGoatsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GoatModule { }
