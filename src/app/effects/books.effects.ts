import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, concatMap } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import { getBooksApi, retrievedBookList} from '../state/books.actions';



@Injectable()
export class BookEffects {

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) { }


  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(getBooksApi),
    switchMap(({ query }) => this.booksService.getBooks(query)
      .pipe(
        tap(bookList => console.log('effects =>>', bookList)),
        concatMap(bookList => of(retrievedBookList({ bookList })))
      ))
  )
  );


  /* testeParameter$ =  createEffect(() => this.actions$.pipe(
    ofType(testParameter),
    switchMap(payload => {
      console.log('payload:', payload.parameter);
      return this.booksService.getBooks()
      .pipe(
        tap(Book => console.log('effects =>>', Book)),
       concatMap(Book => of(retrievedBookList({ Book })))
      )
    })
  )
  ); */

}