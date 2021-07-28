import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

//export const selectBooks = (state: AppState) => state.books;

/* export const selectBooks = createFeatureSelector<
  AppState,
  ReadonlyArray<Book>
>("books"); */

export const selectCollectionState = createSelector(
  (state: AppState) => state.collection,
  (collection: Array<string>) => collection
);

//export const selectCollectionState = (state: AppState) => state.collection;

/* export const selectCollectionState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("collection"); */

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);