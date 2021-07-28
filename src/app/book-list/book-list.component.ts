import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBooksApi } from '../state/books.actions';
import { Book } from './books.model';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
 
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  @Input() title = '';
  @Input() books: Array<Book>;
  @Input() addType = true;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor(private store: Store) {}

}