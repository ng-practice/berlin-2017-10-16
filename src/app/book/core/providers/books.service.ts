import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class BooksService {
  books: Book[] =
  [new Book(
    '12345678',
     'Angular',
    ['Misko Hevery'],
    19.90
  ),
  new Book(
    '8754322',
     'Vue.js',
    ['Evan You'],
    129.90
  ),
  new Book(
    '45678133',
     'React4Real',
    ['FaceBro'],
    9.90
  )];
  constructor() { }

  createBook(newBook: Book) {
    this.books.push(newBook);
  }

  all(): Observable<Book[]> {
    return Observable.of(this.books)
    .delay(2000);
  }

}
