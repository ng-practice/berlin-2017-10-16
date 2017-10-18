import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
    new EventEmitter<{newBook: Book, addForm: NgForm}>();
  book: Book = Book.empty();
  @Input() bookCount: number;
  constructor() { }

  ngOnInit() {
  }

  createBook(addForm: NgForm) {
    const copiedBook = {...{}, ...this.book};
    this.created.emit({newBook: copiedBook, addForm: addForm});
  }



}
