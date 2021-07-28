import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { addBook, removeBook } from './books.actions';
 
export const collectionReducer = createReducer(
  initialState.collection,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    console.log("book id", bookId);
    if (state.indexOf(bookId) > -1) return state;
    return [bookId, ...state];
  })
);