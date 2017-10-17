import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { ToggleViewmodeComponent } from './toggle-viewmode/toggle-viewmode.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { FormsModule } from '@angular/forms';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BooksService } from 'app/book/core/providers/books.service';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule,
    FormsModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    ToggleViewmodeComponent,
    BookAddFormComponent,
    BookDashboardComponent
  ],
  exports: [
    BookDashboardComponent
  ],
  providers: [BooksService]
})
export class BookModule { }
