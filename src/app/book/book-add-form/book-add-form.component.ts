import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from 'app/book/models/book';
import {
  NgForm
  } from '@angular/forms';
@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent implements OnInit {
  @Output() created =
    new EventEmitter<Book>();
  book: Book = Book.empty();

  constructor() { }

  ngOnInit() {
  }

  createBook(addForm: NgForm) {
    this.created.emit(
      {...{},
      ...this.book});
      addForm.reset();
  }



}
