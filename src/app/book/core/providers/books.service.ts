import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';

@Injectable()
export class BooksService {
  bookcount = 0;
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
  constructor(
    private http: HttpClient
  ) { }

  createBook(newBook: Book) {
    this.books.push(newBook);
  }

  all(): Observable<Book[]> {
    return Observable.of(this.books)
    .delay(2000);
  }

  allFromApi(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/books`)
    .map(books => {
      this.bookcount = books.length;
        return books.map(book => {
          book.title = `Bestseller! ${book.title}`;
          book.rating = 0;
          return book;
        });
      }
    );

  }

  createOnServer(newBook: Book) {
    return this.http.post('http://localhost:4280/book', newBook);
  }

}
