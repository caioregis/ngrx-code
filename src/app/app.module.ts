import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


// import { booksReducer } from './state/books.reducer';
// import { collectionReducer } from './state/collection.reducer';
import { booksReducer as books } from './state/books.reducer';
import { collectionReducer as collection} from './state/collection.reducer';

import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';

import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/books.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    BookListComponent,
  ],
  imports: [
    BrowserModule,
   /*  StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }), */
    StoreModule.forRoot({ books, collection }),
    HttpClientModule,
    EffectsModule.forRoot([BookEffects]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
