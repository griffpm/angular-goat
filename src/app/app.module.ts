import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGoatComponent } from './list-goat/list-goat.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailGoatComponent } from './detail-goat/detail-goat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGoatComponent,
    BorderCardDirective,
    DetailGoatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }