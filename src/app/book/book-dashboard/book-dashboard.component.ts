import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from 'app/book/core/providers/books.service';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {

  isGridView = true;
  books: Book[];

  constructor(
    private booksService: BooksService
  ) {
     this.booksService.all()
     .subscribe(books =>
      this.books = books
    );
   }

  ngOnInit() {
  }

  toggleGridView(isGridview: boolean) {
    this.isGridView = isGridview;
  }

  addBook(newBook: Book) {
    this.booksService.createBook(newBook);
  }
}
