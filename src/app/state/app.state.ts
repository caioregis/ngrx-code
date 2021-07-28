import { Book } from '../book-list/books.model';

export interface AppState {
  booksList: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
};

export const initialState = {
  booksList: [],
  collection: [],
};

