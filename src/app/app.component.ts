import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isGridView = true;
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

  ngOnInit() {

  }

  toggleGridView(isGridview: boolean) {
    this.isGridView = isGridview;
  }
}
