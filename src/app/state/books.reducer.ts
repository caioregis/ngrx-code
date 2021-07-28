import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { initialState } from './app.state';

export const booksReducer = createReducer(
  initialState.books,
  /* on(retrievedBookList, (state, { bookList }) => [...bookList]) */
  on(retrievedBookList, (state, {bookList}) => {
    //console.log('reducer =>', bookList)
    bookList = bookList
      .filter(book => !state.some(state => state.id === book.id));
    return [...bookList, ...state];
  })
);