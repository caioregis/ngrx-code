import { createReducer, on, Action } from '@ngrx/store';
import { initialState } from './app.state';
import { retrievedBookList, removeBook, addBook } from './books.actions';

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, {Book}) => {
   const booksList = [...Book, ...state.bookList];
   return {...state, booksList };
  }),
  on(removeBook, (state, { bookId }) => {
    const collection = [...state.collection.filter(id => id !== bookId)];
    return {...state, collection};
  }),
  on(addBook, (state, { bookId }) => {
    if (state.collection.indexOf(bookId) > -1) return state;
    const collection = [...state.collection, bookId];
    return {...state, collection };
  })
);