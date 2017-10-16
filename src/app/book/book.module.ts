import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { ToggleViewmodeComponent } from './toggle-viewmode/toggle-viewmode.component';
import { UtilitiesModule } from '../utilities/utilities.module';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    ToggleViewmodeComponent
  ],
  exports: [
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    ToggleViewmodeComponent
  ]
})
export class BookModule { }
