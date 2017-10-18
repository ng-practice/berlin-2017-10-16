import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  BookModule
} from './book/book.module';
import { AppRoutingModule } from 'app/app.routing.module';
import { NotFoundComponent } from 'app/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})



export class AppModule { }
