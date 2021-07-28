import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  addBook,
  removeBook,
  getBooksApi,
} from './state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  search: string = '';

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(getBooksApi({query: ''}));
  }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  searched(search) {
    this.store.dispatch(getBooksApi({query: search}));
  }
}