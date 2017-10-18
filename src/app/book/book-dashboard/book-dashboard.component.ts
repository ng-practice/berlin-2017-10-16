import {
  Component,
  OnInit
} from '@angular/core';
import {
  Book
} from '../models/book';
import {
  BooksService
} from 'app/book/core/providers/books.service';

import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {
  bookCount: number;
  isGridView = true;
  books: Book[];

  constructor(
    private booksService: BooksService
  ) {
    this.booksService.allFromApi()
      .subscribe(books => {
          return this.books = books;
        },
        err => {
          console.log(err);
        }
      );
      this.bookCount = this.booksService.bookcount;
  }

  ngOnInit() {}

  toggleGridView(isGridview: boolean) {
    this.isGridView = isGridview;
  }

  addBook(values: {newBook: Book, addForm: NgForm}) {
    this.booksService.createOnServer(values.newBook)
      .switchMap(result => this.booksService.allFromApi())
      .subscribe(books => {
        this.books = books;
        values.addForm.resetForm();
      });
  }
}
