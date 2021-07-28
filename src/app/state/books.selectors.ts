import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";

export const selectFeatureBooks = (state: AppState) => state['books'];

export const selectBooks = createSelector(
  selectFeatureBooks,
  (state: AppState): ReadonlyArray<Book> => state.booksList
);

export const selectCollectionState = createSelector(
  selectFeatureBooks,
  (state: AppState): ReadonlyArray<string> => state.collection
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id))
  }
);